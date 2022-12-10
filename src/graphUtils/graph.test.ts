import {
  createAddressField,
  createDateField,
  createMultiSelectField,
  createQuestion,
  createRequirement,
  createSingleSelectField,
  createStringField,
} from '../mocks/mockFactory';
import { requirement } from '../mocks/mockWithCondQuestion';
import { createGraphs } from './graph';

describe('depGraph', () => {
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
    const { depGraph } = createGraphs(requirement);

    it('returns the correct dependencies of q1', () => {
      expect(depGraph.dependenciesOf('q1')).toEqual([]);
    });
    it('returns the correct dependencies of q2', () => {
      expect(depGraph.dependenciesOf('q2')).toEqual([]);
    });
    it('returns the correct dependents of q1', () => {
      expect(depGraph.dependantsOf('q1')).toEqual(['tf1', 'ssf1']);

      expect(depGraph.dependenciesOf('tf1')).toEqual(['q1']);
      expect(depGraph.dependenciesOf('ssf1')).toEqual(['q1']);
    });
    it('returns the correct dependents of q2', () => {
      expect(depGraph.dependantsOf('q2')).toEqual(['af1', 'msf1', 'df1']);

      expect(depGraph.dependenciesOf('af1')).toEqual(['q2']);
      expect(depGraph.dependenciesOf('msf1')).toEqual(['q2']);
      expect(depGraph.dependenciesOf('df1')).toEqual(['q2']);
    });
  });

  describe('conditionally rendered questions to field', () => {
    const { depGraph } = createGraphs(requirement);

    it('returns the correct dependencies of q1', () => {
      expect(depGraph.dependenciesOf('q1')).toEqual([]);
    });
    it('returns the correct dependencies of q2', () => {
      expect(depGraph.dependenciesOf('q2')).toEqual([]);
    });
    it('returns the correct dependencies of q3', () => {
      expect(depGraph.dependenciesOf('crq3')).toEqual([
        'q1', // q1 here because ssf1 is a dependency of a1
        'ssf1',
      ]);
    });
    it('returns the correct dependencies of q4', () => {
      expect(depGraph.dependenciesOf('crq4')).toEqual([
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

describe('visGraph', () => {});
