import './produtos.css'

const ListProdutos = ({ produtos }) => {
  return (
    <>
      {produtos.map(produto => (<div key={produto.nome} className='produto'>
        <p>{produto.nome}</p>
        <ul>{produto.propriedades.map(prop => <li>{prop}</li>)}</ul>

      </div>))}
    </>
  )
}

export default ListProdutos
