import { useState, useEffect } from "react";
import './App.css'
import loadingIcon from './assets/loading.gif'

const urlTablet = 'https://ranekapi.origamid.dev/json/api/produto/tablet';
const urlSmartphone = 'https://ranekapi.origamid.dev/json/api/produto/smartphone';
const urlNotebook = 'https://ranekapi.origamid.dev/json/api/produto/notebook';


function App() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState();


  useEffect(() => {
    async function doFetch() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const dados = await response.json();
        console.log(dados);
        setData(dados);
      } catch (error) {
        console.log('error', error);
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    if (url !== '') {
      doFetch();
    }
  }, [url])

  return (
    <div className="container">

      <div className="botoes">
        <button onClick={() => setUrl(urlTablet)}>tablet</button>
        <button onClick={() => setUrl(urlSmartphone)}>smartphone</button>
        <button onClick={() => setUrl(urlNotebook)}>notebook</button>
      </div>
      {/* {loading && <span> Loading...</span>} */}
      <div className="results">

        {loading && <img className="icon" src={loadingIcon} alt="Icon de loading" />}
        {(data && !loading) && <div className="produto">

          <h1> {data?.nome}</h1>
          <p> R$ {data?.preco}</p>

          <p>
            <ul className="fotos">
              {data?.fotos?.map(foto => {
                return <li><img className="foto" src={foto.src} alt={foto.titulo} /></li>
              })}
            </ul>
          </p>

        </div>}


      </div>
      {/* {error && <span>{...error}</span>} */}
    </div>
  )
}

export default App
