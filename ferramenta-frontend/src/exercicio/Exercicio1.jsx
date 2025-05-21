// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho

import { useState, useEffect } from "react";

// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const UsuariosOptions = ({ onChangeRadio }) => {
  return <div>
    <input type="radio" onChange={onChangeRadio} id="userOption1" name="user" value="0" defaultChecked />
    <label for="userOption1">Luana</label>
    <input type="radio" onChange={onChangeRadio} id="userOption1" name="user" value="1" />
    <label for="userOption1">Mario</label>
  </div>
}

const Index = () => {
  const dados = [luana, mario];
  const [user, setUser] = useState({})

  const totalCompras = (user) => {
    return user?.compras?.map(compra => Number(compra?.preco?.split(" ")[1])).reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  }

  const onChangeRadio = (event) => {
    setUser({ ...dados[Number(event.target.value)] })
  }

  useEffect(() => {
    setUser({ ...dados[0] })
  }, []);

  return <div>
    <p>Usuário:</p>

    <UsuariosOptions onChangeRadio={onChangeRadio} />

    {/* {UsuariosOptions(onChangeRadio)} */}

    <label htmlFor=""></label>
    <p>Nome: {user.cliente}</p>
    <p>Idade: {user.idade}</p>
    <p >Situação:  <span style={{ color: user.ativa ? 'green' : 'red' }}>{user.ativa ? 'Ativa' : 'Inativa'}</span></p>
    <p>Total gasto: R$ {totalCompras(user)}</p>
    {totalCompras(user) > 10000 && <p>Você está gastando muito.</p>}
  </div>;
};

export default Index;