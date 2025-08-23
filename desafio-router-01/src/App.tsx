import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import "./App.scss";
import Produtos from "./pages/Produtos/Produtos";
import Contato from "./pages/Contato/Contato";
import DetalheProduto from "./pages/DetalheProduto/DetalheProduto";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <nav className="botoes">
            <NavLink className="btn-navega" to="/">
              Produto
            </NavLink>
            <NavLink className="btn-navega" to="contato">
              Contato
            </NavLink>
          </nav>
          <main>
            <Routes>
              <Route index element={<Produtos />} />
              <Route path="produto/:id" element={<DetalheProduto />} />
              <Route path="contato" element={<Contato />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
