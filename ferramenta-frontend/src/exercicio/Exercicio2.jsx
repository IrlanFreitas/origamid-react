import React from "react";

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const Exercicio2Old = () => {
  return <section>{produtos.filter(produto => Number(produto.preco.replace("R$ ", "")) > 1500).map(produto => {
    return <div key={produto.id}>
      <h1>{produto.nome}</h1>
      <p>Preço: {produto.preco}</p>
      {produto.cores.map(cor => (<div style={{ color: 'white', backgroundColor: cor, marginLeft: 20, marginBottom: 10 }}>{cor}</div>))}
    </div>
  })}</section >;
};

const Exercicio2 = () => {

  const dados = produtos.filter(produto => Number(produto.preco.replace("R$ ", "")) > 1500)

  const ListagemCores = ({ cores }) => {
    return <ul>
      {cores.map(cor => (<li style={{ color: 'white', backgroundColor: cor, marginLeft: 20, marginBottom: 10 }}>{cor}</li>))}
    </ul>
  }

  return <section>{dados.map(({ id, nome, preco, cores }) => {
    return <div key={id}>
      <h1>{nome}</h1>
      <p>Preço: {preco}</p>
      <ListagemCores cores={cores} />
    </div>
  })}</section >;
};

export default Exercicio2;