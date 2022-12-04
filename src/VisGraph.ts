type VisNode = {
  id: string;
  label: string;
  color: string;
};

type VisEdge = {
  from: string;
  to: string;
};

const DEFAULT_COLOR = '#e04141';

export class VisGraph {
  nodes: VisNode[];
  edges: VisEdge[];

  constructor() {
    this.nodes = [];
    this.edges = [];
  }

  addQuestionNode(questionId: string) {
    this.addNode(questionId, questionId);
  }

  addFieldNode(questionId: string, fieldId: string) {
    this.addNode(questionId + fieldId, fieldId);
  }

  addNode(id: string, label: string) {
    this.nodes.push({
      id,
      label,
      color: DEFAULT_COLOR,
    });
  }

  addEdge(visEdge: VisEdge) {
    this.edges.push(visEdge);
  }
}
