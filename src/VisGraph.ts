type VisNode = {
  id: string;
  label: string;
  color: string;
  size?: number;
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
        hierarchical: false,
      },
      edges: {
        color: BLACK,
      },
      physics: {
        enabled: false,
      },
    };
  }

  addQuestionNode(questionId: string) {
    this.addNode(questionId, questionId, LIGHT_BLUE);
  }

  addFieldNode(questionId: string, fieldId: string) {
    this.addNode(questionId + fieldId, fieldId, LIGHT_GREEN);
  }

  addNode(id: string, label: string, color: string) {
    this.nodes.push({
      id,
      label,
      color,
    });
  }

  addEdge(visEdge: VisEdge, isConditional = false) {
    this.edges.push({
      ...visEdge,
      color: isConditional ? ORANGE : BLACK,
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
      id: n.id,
      color: n.color,
      label: n.label,
      borderWidth: DEFAULT_BORDER,
    }));
  }
}
