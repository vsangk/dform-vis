import {
  createAddressField,
  createDateField,
  createMultiSelectField,
  createQuestion,
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
        createSingleSelectField('ssf1'),
      ]),
      createQuestion('q2', false, [
        createAddressField('af1'),
        createMultiSelectField('msf1'),
        createDateField('df1'),
      ]),
    ];
    const requirement = createRequirement('req', questions, []);
    const graph = createDepGraph(requirement);

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
    it('returns the correct dependencies', () => {});
    it('returns the correct dependents', () => {});
  });

  describe('conditionally rendered fields to field', () => {
    it('returns the correct dependencies', () => {});
    it('returns the correct dependents', () => {});
  });

  describe('conditionally rendered options to field', () => {
    it('returns the correct dependencies', () => {});
    it('returns the correct dependents', () => {});
  });
  it('throws when there is a circular dependency', () => {});
});

export {};
