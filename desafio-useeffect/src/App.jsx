import { useState, useEffect } from "react";
// import loadingIcon from './assets/loading.gif'
import Produto from "./Produto";
import './App.css'

const url = 'https://ranekapi.origamid.dev/json/api/produto/';

function App() {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(null);
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoLocal = localStorage.getItem('produto');
    if (produtoLocal !== null) {
      fetchProduto(produtoLocal)
    }
  }, [])

  const fetchProduto = async (produto) => {
    try {
      // setLoading(true);
      const response = await fetch(url + produto);
      const dados = await response.json();
      setProduto(dados)
      // setData(dados);
    } catch (error) {
      console.log('error', error);
    } finally {
      // setLoading(false)
    }
  }

  const handleClick = async (event) => {
    const produtoTexto = event.target.innerText
    localStorage.setItem("produto", produtoTexto)
    fetchProduto(produtoTexto)
  }

  return (
    <>
      <h1>Preferência: {produto?.nome?.toLowerCase()}</h1>
      <div className="botoes">
        <button onClick={handleClick}>smartphone</button>
        <button onClick={handleClick}>notebook</button>
      </div>
      {produto && <Produto dados={produto} />}
    </>
  )
}

export default App
