type VisNode = {
  id: string;
  label: string;
  color: string;
};

type VisEdge = {
  from: string;
  to: string;
};

const LIGHT_GREEN = '#7ad6bc';
const LIGHT_BLUE = '#648fc4';

export class VisGraph {
  nodes: VisNode[];
  edges: VisEdge[];

  constructor() {
    this.nodes = [];
    this.edges = [];
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

  addEdge(visEdge: VisEdge) {
    this.edges.push(visEdge);
  }
}
