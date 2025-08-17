import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import { Header } from "./components/Header";
import { Login } from "./pages/Login";
import Produto from "./pages/Produto";
import ProdutoDescricao from "./components/Produto/ProdutoDescricao";
import ProdutoAvaliacao from "./components/Produto/ProdutoAvaliacao";
import ProdutoCustomizado from "./components/Produto/ProdutoCustomizado";

// * Para a criação de elementos gerais uma boa abordagem seria na raiz do projeto
// * nesse caso aqui mesmo no App, como por exemplo definir o Header, Footer, Side e Nav do site

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="sobre" element={<Sobre />} />
        {/* Passando parametro pela rota */}
        {/* <Route path="produto/:id" element={<Produto />} /> */}
        {/* Quando é criado com os nested routes não precisa do /*  */}
        <Route path="produto/:id/*" element={<Produto />}>
          <Route index element={<ProdutoDescricao />} />
          <Route path="avaliacao" element={<ProdutoAvaliacao />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
        </Route>
        <Route path="contato" element={<Contato />} />
        {/* O asterisco serve para toda rota que não for um rota definida */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer>Aqui está o componente footer</footer>
    </BrowserRouter>
  );
}

export default App;
