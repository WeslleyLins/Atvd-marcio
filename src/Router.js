import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Paginas/Home";
import MeuContato from "./Paginas/MeuContato";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MeuContato />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;