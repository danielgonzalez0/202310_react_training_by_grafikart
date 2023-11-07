import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AhookUseState from './components/decouverte/AhookUseState';
import FormulaireEnReact from './components/decouverte/FormulaireEnReact';
import FluxDeDonnees from './components/decouverte/FluxDeDonnees';
import TpListeDeProduit from './components/decouverte/TP_liste_produit/TpListeDeProduit';
import HookUseEffect from './components/les bases/HookUseEffect';
import HookUseMemo from './components/les bases/HookUseMemo';
import HookUseRef from './components/les bases/HookUseRef';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hookUseState" element={<AhookUseState />} />
        <Route path="/formulaires" element={<FormulaireEnReact />} />
        <Route path="/fluxdonnees" element={<FluxDeDonnees />} />
        <Route path="/tplistedeproduits" element={<TpListeDeProduit />} />
        <Route path="/hookUseEffect" element={<HookUseEffect/>} />
        <Route path="/hookUseMemo" element={<HookUseMemo/>} />
        <Route path="/hookUseRef" element={<HookUseRef/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
