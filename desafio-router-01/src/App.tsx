/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.scss";
import Produtos from "./pages/Produtos/Produtos";

function App() {
  return (
    <>
      <div className="container">
        <nav className="botoes">
          <p className="btn-navega">Produtos</p>
          <p className="btn-navega"> Contato</p>
        </nav>
        <div className="">
          <Produtos />
          {/* <div className="produto-card">
            <img
              className="produto-imagem"
              src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook.jpg"
              alt="Notebook"
            />
            <h1 className="produto-titulo">Notebook</h1>
          </div>
          <div className="produto-card">
            <img
              className="produto-imagem"
              src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook.jpg"
              alt="Notebook"
            />
            <h1 className="produto-titulo">Notebook</h1>
          </div>
          <div className="produto-card">
            <img
              className="produto-imagem"
              src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook.jpg"
              alt="Notebook"
            />
            <h1 className="produto-titulo">Notebook</h1>
          </div>
          <div className="produto-card">
            <img
              className="produto-imagem"
              src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook.jpg"
              alt="Notebook"
            />
            <h1 className="produto-titulo">Notebook</h1>
          </div>
          <div className="produto-card">
            <img
              className="produto-imagem"
              src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook.jpg"
              alt="Notebook"
            />
            <h1 className="produto-titulo">Notebook</h1>
          </div>
          <div className="produto-card">
            <img
              className="produto-imagem"
              src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook.jpg"
              alt="Notebook"
            />
            <h1 className="produto-titulo">Notebook</h1>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
