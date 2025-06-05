import { useContext } from 'react'
import { GlobalContext } from './context/GlobalContext'

const Produtos = () => {

  const dados = useContext(GlobalContext)

  console.log(dados);


  return (
    <div>
      <h1>Produtos:</h1>
      <button style={{ marginRight: '10px' }} onClick={dados.limparDados}>Limpar Dados</button>
      <button onClick={dados.carregaDados}>Carregar Dados</button>
      <ul>
        {dados.produtos.map(produto => <li>
          <p>Id: {produto.id}</p>
        </li>)}
      </ul>
    </div>
  )
}

export default Produtos
