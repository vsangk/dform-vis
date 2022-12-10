import {
  createAddressField,
  createDateField,
  createMultiSelectField,
  createQuestion,
  createRequirement,
  createSingleSelectField,
  createStringField,
} from '../mocks/mockFactory';
import { requirement as requirementWithCondQuestion } from '../mocks/mockWithCondQuestion';
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
      expect(depGraph.dependantsOf('q1')).toEqual(['q1__tf1', 'q1__ssf1']);

      expect(depGraph.dependenciesOf('q1__tf1')).toEqual(['q1']);
      expect(depGraph.dependenciesOf('q1__ssf1')).toEqual(['q1']);
    });
    it('returns the correct dependents of q2', () => {
      expect(depGraph.dependantsOf('q2')).toEqual([
        'q2__af1',
        'q2__msf1',
        'q2__df1',
      ]);

      expect(depGraph.dependenciesOf('q2__af1')).toEqual(['q2']);
      expect(depGraph.dependenciesOf('q2__msf1')).toEqual(['q2']);
      expect(depGraph.dependenciesOf('q2__df1')).toEqual(['q2']);
    });
  });

  describe('conditionally rendered questions to field', () => {
    const { depGraph } = createGraphs(requirementWithCondQuestion);

    it('returns the correct dependencies of q1', () => {
      expect(depGraph.dependenciesOf('q1')).toEqual([]);
    });
    it('returns the correct dependencies of q2', () => {
      expect(depGraph.dependenciesOf('q2')).toEqual([]);
    });
    it('returns the correct dependencies of q3', () => {
      expect(depGraph.dependenciesOf('crq3')).toEqual([
        'q1', // q1 here because ssf1 is a dependency of a1
        'q1__ssf1',
      ]);
    });
    it('returns the correct dependencies of q4', () => {
      expect(depGraph.dependenciesOf('crq4')).toEqual([
        'q1', // q1 here because ssf1 is a dependency of a1
        'q1__ssf1',
        'q2', // q2 here because af1 is a dependency of q2
        'q2__af1',
      ]);
    });

    // TODO Add dependents of each q
  });

  // TODO
  describe('conditionally rendered fields to field', () => {
    it('returns the correct dependencies', () => {});
    it('returns the correct dependents', () => {});
  });

  // describe('conditionally rendered options to field', () => {
  //   it('returns the correct dependencies', () => {});
  //   it('returns the correct dependents', () => {});
  // });

  // TODO
  it('throws when there is a circular dependency', () => {});
});

describe('visGraph', () => {
  describe('node depth', () => {
    const { visGraph } = createGraphs(requirementWithCondQuestion);

    it.each`
      nodeId         | expectedLevel
      ${'q1'}        | ${1}
      ${'q1__tf1'}   | ${2}
      ${'q1__ssf1'}  | ${2}
      ${'q2'}        | ${1}
      ${'q2__af1'}   | ${2}
      ${'q2__msf1'}  | ${2}
      ${'q2__df1'}   | ${2}
      ${'crq3'}      | ${3}
      ${'crq3__tf2'} | ${4}
      ${'crq4'}      | ${3}
      ${'crq4__tf3'} | ${4}
    `('returns $expectedLevel for $nodeId', ({ nodeId, expectedLevel }) => {
      expect(visGraph.nodes.find((n) => n.id === nodeId)?.level).toBe(
        expectedLevel
      );
    });
  });
});
