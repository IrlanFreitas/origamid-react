import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Produtos from "./pages/Produtos/Produtos";
import Contato from "./pages/Contato/Contato";
import DetalheProduto from "./pages/DetalheProduto/DetalheProduto";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className={styles.container}>
          <Header />
          <main className="main">
            <Routes>
              <Route index element={<Produtos />} />
              <Route path="produto/:id" element={<DetalheProduto />} />
              <Route path="contato" element={<Contato />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
