import { useMemo, useState } from 'react';
import GraphVis from './GraphVis/GraphVis';
import { requirement } from './mocks/mockWithCondQuestion';
import { createDepGraph } from './GraphVis/GraphVis.utils';

function App() {
  const [search, setSearch] = useState('');
  const { visGraph } = useMemo(() => createDepGraph(requirement), []);

  return (
    <div>
      <label id="search-label">Search ID</label>
      <input
        aria-labelledby="search-label"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          const found = visGraph.highlightSelected(e.target.value);
          if (!found) {
            visGraph.unhighlightSelected();
          }
        }}
      />
      <GraphVis
        nodes={visGraph.nodes}
        edges={visGraph.edges}
        options={visGraph.options}
      />
    </div>
  );
}

export default App;
