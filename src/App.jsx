import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AhookUseState from "./components/decouverte/AhookUseState";
import FormulaireEnReact from "./components/decouverte/FormulaireEnReact";
import FluxDeDonnees from "./components/decouverte/FluxDeDonnees";

function App() {

return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hookUseState' element={<AhookUseState/>}/>
      <Route path='/formulaires' element={<FormulaireEnReact/>}/>
      <Route path='/fluxdonnees' element={<FluxDeDonnees/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
