import { getIds } from './graph';

type VisNode = {
  id: string;
  label: string;
  color: string;
  level: number;
  borderWidth?: number;
};

type VisEdge = {
  from: string;
  to: string;
  color?: string;
};

const LIGHT_GREEN = '#7ad6bc';
const LIGHT_BLUE = '#648fc4';
const ORANGE = '#db8412';
const BLACK = '#000000';

const LARGE_BORDER = 5;
const DEFAULT_BORDER = 1;

export class VisGraph {
  nodes: VisNode[];
  edges: VisEdge[];
  options: object;

  constructor() {
    this.nodes = [];
    this.edges = [];
    this.options = {
      layout: {
        hierarchical: true,
      },
      edges: {
        color: BLACK,
      },
      physics: {
        enabled: false,
      },
    };
  }

  addQuestionNode(questionId: string, level: number) {
    this.addNode(questionId, questionId, LIGHT_BLUE, level);
  }

  addFieldNode(questionId: string, fieldId: string, level: number) {
    const fieldLabel = getIds(fieldId).fieldId;

    this.addNode(fieldId, fieldLabel, LIGHT_GREEN, level);
  }

  addNode(id: string, label: string, color: string, level: number) {
    this.nodes.push({
      id,
      label,
      color,
      level,
    });
  }

  addEdge(visEdge: VisEdge, isConditional = false) {
    this.edges.push({
      ...visEdge,
      color: isConditional ? ORANGE : BLACK,
    });
  }

  updateLevel(nodeId: string, level: number) {
    this.nodes = this.nodes.map((n) => {
      if (n.id === nodeId) {
        return {
          ...n,
          level,
        };
      }

      return n;
    });
  }

  // ! Not a fan of this because side effect isn't obvious when determining React re-rendering
  highlightSelected(nodeId: string): boolean {
    // iterate over each node and replace the matchign one with a bigger size and diff color
    let found = false;
    this.nodes = this.nodes.map((n) => {
      if (n.id === nodeId) {
        found = true;
        return {
          ...n,
          borderWidth: LARGE_BORDER,
        };
      }

      return n;
    });

    return found;
  }

  // ! Not a fan of this because side effect isn't obvious when determining React re-rendering
  unhighlightSelected() {
    // iterate over each node and replace the matchign one with a bigger size and diff color
    this.nodes = this.nodes.map((n) => ({
      ...n,
      borderWidth: DEFAULT_BORDER,
    }));
  }
}
