import React from 'react';

const Produto = ({ dados }) => {
  // const [dados, setDados] = React.useState(informacoes)

  // React.useEffect(() => {
  //   const produto = window.localStorage.getItem('produto')
  //   if (produto !== null) setDados(produto)
  // }, [])


  return (
    <div className="produto">
      <h1>{dados?.nome}</h1>
      <p>R$ {dados?.preco}</p>
      <img className="foto" src={dados?.fotos?.[0].src} alt={dados?.fotos?.[0].titulo} />
    </div>
  )
}

export default Produto
