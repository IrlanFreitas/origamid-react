import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import styles from "./App.module.scss";
import Produtos from "./pages/Produtos/Produtos";
import Contato from "./pages/Contato/Contato";
import DetalheProduto from "./pages/DetalheProduto/DetalheProduto";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className={styles.container}>
          <nav className={styles.botoes}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.botaoNavegarAtivo : styles.botaoNavegar
              }
              to="/"
            >
              Produtos
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.botaoNavegarAtivo : styles.botaoNavegar
              }
              to="contato"
            >
              Contato
            </NavLink>
          </nav>
          <main className="main">
            <Routes>
              <Route index element={<Produtos />} />
              <Route path="produto/:id" element={<DetalheProduto />} />
              <Route path="contato" element={<Contato />} />
            </Routes>
          </main>
          <footer>
            <p>Alguns direitos reservados.</p>
          </footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
