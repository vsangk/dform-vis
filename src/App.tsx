import { useMemo, useState } from 'react';
import GraphVis from './GraphVis/GraphVis';
import { requirement } from './mocks/mockWithCondQuestion';
import { createDepGraph } from './GraphVis/GraphVis.utils';

function App() {
  const {
    visGraph: { nodes, edges, options },
  } = useMemo(() => createDepGraph(requirement), []);

  return (
    <div>
      <GraphVis nodes={nodes} edges={edges} options={options} />
    </div>
  );
}

export default App;
