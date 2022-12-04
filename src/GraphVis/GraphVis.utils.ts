import { DepGraph } from 'dependency-graph';

import { Requirement } from '../types';
import { VisGraph } from '../VisGraph';

export function createDepGraph(requirement: Requirement) {
  const graph = new DepGraph();
  const visGraph = new VisGraph();

  for (const question of requirement.questions) {
    // Add every question as a node
    graph.addNode(question.id);
    visGraph.addQuestionNode(question.id);

    for (const field of question.fields) {
      // Add every field as a node
      graph.addNode(field.id);
      visGraph.addFieldNode(question.id, field.id);

      // Add question as a dependency of field
      graph.addDependency(field.id, question.id);
      // Swapping to and from ordering compared to dep graph because this is purely directional
      visGraph.addEdge({ to: question.id + field.id, from: question.id });
    }
  }

  /**
   * Each question|field in question_configs depends on ALL the operands.
   *
   * To find each field_id the operand is connected to we need to find the field_id
   * of where that conditional is and associate that field_id to either the
   * conditionally rendered question of field
   *
   */
  for (const {
    operands,
    question_configs,
  } of requirement.conditional_expressions) {
    // TODO: Instead of pushing into a dependentId array, we may be able to
    // TODO: go the other way. Flatmap all the conditionals and filter out non matching ones
    const dependentIds: { questionId: string; fieldId: string }[] = [];

    // find all dependentIds from all operands
    for (const operand of operands) {
      if ('boolean' in operand) {
        // TODO: Handle a separate node for cross requirement operand
        continue;
      }

      // TODO this is pretty inefficient, we're checking every field for each operand for a matching conditional
      requirement.questions.forEach((q) => {
        q.fields.forEach((f) => {
          if (f.field_type === 'FIELD_TYPE_SINGLESELECT') {
            const matchingConditional =
              f.field_type_single_select.conditionals.find(
                (c) => c.id === operand.conditional_id
              );
            if (matchingConditional) {
              dependentIds.push({ questionId: q.id, fieldId: f.id });
            }
          }

          if (f.field_type === 'FIELD_TYPE_MULTISELECT') {
            const matchingConditional =
              f.field_type_multi_select.conditionals.find(
                (c) => c.id === operand.conditional_id
              );
            if (matchingConditional) {
              dependentIds.push({ questionId: q.id, fieldId: f.id });
            }
          }

          if (f.field_type === 'FIELD_TYPE_ADDRESS') {
            const matchingConditional = f.field_type_address.conditionals.find(
              (c) => c.id === operand.conditional_id
            );
            if (matchingConditional) {
              dependentIds.push({ questionId: q.id, fieldId: f.id });
            }
          }
        });
      });
    }

    // associate the conditionally rendered question|field with the conditional
    for (const questionConfig of question_configs) {
      for (const dependentId of dependentIds) {
        const { questionId: dependentQuestionId, fieldId: dependentFieldId } =
          dependentId;

        const isFieldLevelConditional =
          questionConfig.field_id ||
          questionConfig.option_values.length > 0 ||
          questionConfig.default_options.length > 0 ||
          questionConfig.label_options_list.length > 0;

        if (isFieldLevelConditional) {
          graph.addDependency(questionConfig.field_id, dependentFieldId);
          visGraph.addEdge({
            to: questionConfig.question_id + questionConfig.field_id,
            from: dependentQuestionId + dependentFieldId,
          });
        } else {
          graph.addDependency(questionConfig.question_id, dependentFieldId);
          visGraph.addEdge({
            to: questionConfig.question_id,
            from: dependentQuestionId + dependentFieldId,
          });
        }
      }
    }
  }

  return { graph, visGraph };
}
