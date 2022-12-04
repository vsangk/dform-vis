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
        color: '#000000',
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

  highlightSelected(nodeId: string): boolean {
    // iterate over each node and replace the matchign one with a bigger size and diff color
    let found = false;
    const nodesWithHighlight = this.nodes.map((n) => {
      if (n.id === nodeId) {
        found = true;
        return {
          ...n,
          borderWidth: 3,
          size: 50,
        };
      }

      return n;
    });
    this.nodes = nodesWithHighlight;

    return found;
  }

  unhighlightSelected() {
    // iterate over each node and replace the matchign one with a bigger size and diff color
    this.nodes = this.nodes.map((n) => ({
      id: n.id,
      color: n.color,
      label: n.label,
    }));
  }
}
