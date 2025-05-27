import ListProdutos from '../../components/ListProdutos/ListProdutos';
import Titulo from '../../components/Titulo/Titulo';

const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Produtos = () => {
  return (
    <section>
      <Titulo texto="Produtos" />
      <ListProdutos produtos={produtos} />
    </section>
  )
}

export default Produtos
