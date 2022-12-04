import { useMemo } from 'react';
// @ts-expect-error no types for now
import Graph from 'react-graph-vis';

import { VisGraph } from '../VisGraph';
type Props = {
  edges: VisGraph['edges'];
  nodes: VisGraph['nodes'];
  options: object;
};

function GraphVis({ edges, nodes, options }: Props) {
  const graph = useMemo(
    () => ({
      edges,
      nodes,
    }),
    [edges, nodes]
  );

  return <Graph graph={graph} options={options} style={{ height: '640px' }} />;
}

export default GraphVis;
