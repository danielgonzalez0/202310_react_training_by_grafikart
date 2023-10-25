import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AhookUseState from "./components/decouverte/AhookUseState";

function App() {

return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hookUseState' element={<AhookUseState/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
