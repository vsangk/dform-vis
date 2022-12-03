import { DepGraph } from 'dependency-graph';

import { Requirement } from '../types';

export function createDepGraph(requirement: Requirement) {
  const graph = new DepGraph();

  for (const question of requirement.questions) {
    // Add every question as a node
    graph.addNode(question.id);

    for (const field of question.fields) {
      // Add every field as a node
      graph.addNode(field.id);
      // Add question as a dependency of field
      graph.addDependency(field.id, question.id);
    }
  }

  for (const conditionalExpression of requirement.conditional_expressions) {
    const dependentFieldIds: string[] = [];
    for (const operand of conditionalExpression.operands) {
      if ('boolean' in operand) {
        // TODO: Handle a separate node for cross requirement operand
        continue;
      }

      // each question_id in question_configs depends on ALL the operands. To find
      // each field_id it's connected to we need to find the field_id of where that
      // conditional is
      requirement.questions
        .flatMap((q) => q.fields)
        .forEach((f) => {
          // TODO this is pretty inefficient, we're checking every field for each operand for a matching conditional
          if (f.field_type === 'FIELD_TYPE_SINGLESELECT') {
            const matchingConditional =
              f.field_type_single_select.conditionals.find(
                (c) => c.id === operand.conditional_id
              );
            if (matchingConditional) {
              dependentFieldIds.push(f.id);
            }
          }

          if (f.field_type === 'FIELD_TYPE_MULTISELECT') {
            const matchingConditional =
              f.field_type_multi_select.conditionals.find(
                (c) => c.id === operand.conditional_id
              );
            if (matchingConditional) {
              dependentFieldIds.push(f.id);
            }
          }

          if (f.field_type === 'FIELD_TYPE_ADDRESS') {
            const matchingConditional = f.field_type_address.conditionals.find(
              (c) => c.id === operand.conditional_id
            );
            if (matchingConditional) {
              dependentFieldIds.push(f.id);
            }
          }
        });
    }

    for (const questionConfig of conditionalExpression.question_configs) {
      for (const dependentFieldId of dependentFieldIds) {
        const isFieldLevelConditional =
          questionConfig.field_id ||
          questionConfig.option_values.length > 0 ||
          questionConfig.default_options.length > 0 ||
          questionConfig.label_options_list.length > 0;

        if (isFieldLevelConditional) {
          graph.addDependency(questionConfig.field_id, dependentFieldId);
        } else {
          graph.addDependency(questionConfig.question_id, dependentFieldId);
        }
      }
    }
  }

  return graph;
}
