import React from 'react'
import Header from '../components/Header/Header'
import './produtos.css';
import ListProdutos from '../components/ListProdutos';


const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Produtos = () => {
  return (
    <>
      <Header>Produtos</Header>
      <ListProdutos produtos={produtos}/>
    </>
  )
}

export default Produtos
