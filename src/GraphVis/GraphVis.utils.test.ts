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

describe('createDepGraph', () => {
  describe('question to field', () => {
    const questions = [
      createQuestion('q1', false, [
        createStringField('tf1'),
        createSingleSelectField('ssf1', []),
      ]),
      createQuestion('q2', false, [
        createAddressField('af1', []),
        createMultiSelectField('msf1'),
        createDateField('df1'),
      ]),
    ];
    const requirement = createRequirement('req', questions, []);
    const { graph } = createDepGraph(requirement);

    it('returns the correct dependencies of q1', () => {
      expect(graph.dependenciesOf('q1')).toEqual([]);
    });
    it('returns the correct dependencies of q2', () => {
      expect(graph.dependenciesOf('q2')).toEqual([]);
    });
    it('returns the correct dependents of q1', () => {
      expect(graph.dependantsOf('q1')).toEqual(['tf1', 'ssf1']);

      expect(graph.dependenciesOf('tf1')).toEqual(['q1']);
      expect(graph.dependenciesOf('ssf1')).toEqual(['q1']);
    });
    it('returns the correct dependents of q2', () => {
      expect(graph.dependantsOf('q2')).toEqual(['af1', 'msf1', 'df1']);

      expect(graph.dependenciesOf('af1')).toEqual(['q2']);
      expect(graph.dependenciesOf('msf1')).toEqual(['q2']);
      expect(graph.dependenciesOf('df1')).toEqual(['q2']);
    });
  });

  describe('conditionally rendered questions to field', () => {
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
      // Benefit of this factory is you can easily see the dependencies on the conditionals
      // and quickly look up conditionals to fields above without all the noise
      createConditionalExpressionField('ce1', 'ssf1-c1', [
        createQuestionConfigForQuestion('crq3'),
      ]),
      createConditionalExpressionAnd('ce2', 'ssf1-c2', 'af1-c1', [
        createQuestionConfigForQuestion('crq4'),
      ]),
    ];

    const requirement = createRequirement(
      'req',
      questions,
      conditionalExpressions
    );
    const { graph } = createDepGraph(requirement);

    it('returns the correct dependencies of q1', () => {
      expect(graph.dependenciesOf('q1')).toEqual([]);
    });
    it('returns the correct dependencies of q2', () => {
      expect(graph.dependenciesOf('q2')).toEqual([]);
    });
    it('returns the correct dependencies of q3', () => {
      expect(graph.dependenciesOf('crq3')).toEqual([
        'q1', // q1 here because ssf1 is a dependency of a1
        'ssf1',
      ]);
    });
    it('returns the correct dependencies of q4', () => {
      expect(graph.dependenciesOf('crq4')).toEqual([
        'q1', // q1 here because ssf1 is a dependency of a1
        'ssf1',
        'q2', // q2 here because af1 is a dependency of q2
        'af1',
      ]);
    });

    // TODO Add dependents of each q
  });

  describe('conditionally rendered fields to field', () => {
    it('returns the correct dependencies', () => {});
    it('returns the correct dependents', () => {});
  });

  // describe('conditionally rendered options to field', () => {
  //   it('returns the correct dependencies', () => {});
  //   it('returns the correct dependents', () => {});
  // });
  it('throws when there is a circular dependency', () => {});
});
