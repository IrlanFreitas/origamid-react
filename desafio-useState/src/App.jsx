import { useState } from "react";
import './App.css'
import loadingIcon from './assets/loading.gif'
import Produto from "./Produto";

const url = 'https://ranekapi.origamid.dev/json/api/produto/';

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleClick = async (event) => {
    const product = event.target.innerText

    try {
      setLoading(true);
      const response = await fetch(url + product);
      const dados = await response.json();
      setData(dados);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="botoes">
        <button onClick={handleClick}>tablet</button>
        <button onClick={handleClick}>smartphone</button>
        <button onClick={handleClick}>notebook</button>
      </div>
      {loading && <img className="icon" src={loadingIcon} alt="Icon de loading" />}
      {(data && !loading) && <Produto dados={data} />}
    </>
  )
}

export default App
