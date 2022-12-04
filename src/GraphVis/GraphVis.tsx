// @ts-expect-error no types for now
import Graph from 'react-graph-vis';
import {
  createAddressField,
  createConditionalExpressionAnd,
  createConditionalExpressionField,
  createDateField,
  createMultiSelectField,
  createQuestion,
  createQuestionConfigForQuestion,
  createRequirement,
  createSingleSelectField,
  createStringField,
} from '../mocks/mockFactory';
import { createDepGraph } from './GraphVis.utils';

const options = {
  layout: {
    hierarchical: false,
  },
  edges: {
    color: '#000000',
  },
  physics: {
    enabled: false,
  },
};

const questions = [
  createQuestion('q1', false, [
    createStringField('tf1'),
    createSingleSelectField('ssf1', [
      { id: 'ssf1-c1', conditional_type_in: { values: ['Option 1'] } },
      { id: 'ssf1-c2', conditional_type_in: { values: ['Option 2'] } },
    ]),
  ]),
  createQuestion('q2', false, [
    createAddressField('af1', [
      {
        id: 'af1-c1',
        conditional_type_country_in: {
          values: ['US'],
        },
      },
    ]),
    createMultiSelectField('msf1'),
    createDateField('df1'),
  ]),
  createQuestion('crq3', false, [createStringField('tf2')]),
  createQuestion('crq4', false, [createStringField('tf3')]),
];
const conditionalExpressions = [
  // * Benefit of this factory is you can easily see the dependencies on the conditionals
  // * and quickly look up conditionals to fields above without all the noise
  createConditionalExpressionField('ce1', 'ssf1-c1', [
    createQuestionConfigForQuestion('crq3'),
  ]),
  createConditionalExpressionAnd('ce2', 'ssf1-c2', 'af1-c1', [
    createQuestionConfigForQuestion('crq4'),
  ]),
];

const requirement = createRequirement('req', questions, conditionalExpressions);

const { visGraph } = createDepGraph(requirement);

function GraphVis() {
  return (
    <Graph graph={visGraph} options={options} style={{ height: '640px' }} />
  );
}

export default GraphVis;
