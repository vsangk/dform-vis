import { DepGraph } from 'dependency-graph';

import { Requirement } from '../types';
import { VisGraph } from './visGraph';

// TODO Overhaul building of this field outside of createGraphs, it should
// TODO either be encapsulated when adding things to the graph or we only use this
// TODO as fieldId and labels can extract from it
const FIELD_ID_SEPARATOR = '__';

export function buildUniqueFieldId(questionId: string, fieldId: string) {
  return questionId + FIELD_ID_SEPARATOR + fieldId;
}

export function getIds(uniqueFieldId: string) {
  const ids = uniqueFieldId.split(FIELD_ID_SEPARATOR);

  if (ids.length !== 2) {
    throw new Error('invalid uniqueFieldId when getting ids');
  }

  return {
    questionId: ids[0],
    fieldId: ids[1],
  };
}

export function createGraphs(requirement: Requirement) {
  const depGraph = new DepGraph();
  const visGraph = new VisGraph();

  /**
   * Add all the nodes and question->field edges without conditional edges
   */
  for (const question of requirement.questions) {
    // Add every question as a node
    depGraph.addNode(question.id);
    visGraph.addQuestionNode(question.id, 1);

    for (const field of question.fields) {
      const fieldId = buildUniqueFieldId(question.id, field.id);

      // Add every field as a node
      depGraph.addNode(fieldId);
      visGraph.addFieldNode(question.id, fieldId, 1);

      // Add question as a dependency of field
      depGraph.addDependency(fieldId, question.id);
      // Swapping to and from ordering compared to dep graph because this is purely directional
      visGraph.addEdge({
        to: fieldId,
        from: question.id,
      });
    }
  }

  /**
   * Add all the conditional edges
   *
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
        const parentQuestionId = questionConfig.question_id;
        const parentFieldId = buildUniqueFieldId(
          questionConfig.question_id,
          questionConfig.field_id
        );
        const dependentFieldId = buildUniqueFieldId(
          dependentId.questionId,
          dependentId.fieldId
        );

        const isFieldLevelConditional =
          questionConfig.field_id ||
          questionConfig.option_values.length > 0 ||
          questionConfig.default_options.length > 0 ||
          questionConfig.label_options_list.length > 0;

        if (isFieldLevelConditional) {
          depGraph.addDependency(parentFieldId, dependentFieldId);
          visGraph.addEdge(
            {
              to: parentFieldId,
              from: dependentFieldId,
            },
            true
          );
        } else {
          depGraph.addDependency(parentQuestionId, dependentFieldId);
          visGraph.addEdge(
            {
              to: parentQuestionId,
              from: dependentFieldId,
            },
            true
          );
        }
      }
    }
  }

  /**
   * Add levels (i.e depth) to each visual node for hierarchy
   *
   */
  const depGraphClone = depGraph.clone();
  let depth = 1;

  while (depGraphClone.size() > 0) {
    // grab leaves
    let leaves = depGraphClone.overallOrder(true);

    // for each leaf, remove them from graph and add depth of 1
    for (const leaf of leaves) {
      visGraph.updateLevel(leaf, depth);
      depGraphClone.removeNode(leaf);
    }

    depth++;
  }

  return { depGraph, visGraph };
}
