
const Produto = ({ dados }) => {
  return (
    <div className="produto">
      <h1>{dados?.nome}</h1>
      <p>R$ {dados?.preco}</p>
      <img className="foto" src={dados?.fotos[0].src} alt={dados?.fotos[0].titulo} />
    </div>
  )
}

export default Produto
