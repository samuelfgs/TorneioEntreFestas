import * as React from 'react';
// If you are using loader-react:
import { PlasmicCanvasHost } from '@plasmicapp/loader-react';
// Or if you are using codegen:
// import { PlasmicCanvasHost } from '@plasmicapp/host';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { PLASMIC } from './plasmic-init';
import Homepage from './components/Homepage';
import { TableGroup } from './components/TableGroup';

export default function AppRoot() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/table" element={<TableGroup tenistas={["Angelo", "Danilo", "Elvis", "Samuel"]} />} />
        <Route path="/table2" element={<TableGroup tenistas={["Angelo", "Danilo", "Elvis", "Samuel"]} />} />
        <Route path="/plasmic-host" element={<PlasmicCanvasHost />} />
      </Routes>
    </Router>
  );
}