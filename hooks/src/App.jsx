import React from 'react'
import Modal from './Modal';
import ButtonModal from './ButtonModal';
import UseRefTest from './UseRefTest';
import UseMemoTest from './UseMemoTest';
import UserContext from './UseContextCase/UserContext';
import Produto from './UseContextCase/Produto';
import { GlobalStorage } from './UseContextCase/GlobalContext'

// * useRef
// const App = () => {
//   return <UseRefTest />
// }

// * useMemo
// const App = () => {
//   return <UseMemoTest />
// }

// * useContext - exemplo básico
// f

// * useContext - exemplo mais elaborado
const App = () => {

  return <GlobalStorage> <Produto /> </GlobalStorage>
}

// * useState muitos exemplos
// function App() {
//   const [contar, setContar] = useState(0);
//   const [ativo, setAtivo] = useState(false);
//   const [dados, setDados] = useState({ nome: 'Irlan', idade: '30' });
//   const [modal, setModal] = useState(false);

//   const handleClick = () => {
//     setAtivo(!ativo)
//     setDados({ ...dados, faculdade: 'Sim' })
//   }

//   return (<div >
//     <p>{dados.nome}</p>
//     <p>{dados.idade}</p>
//     <p>{dados.faculdade}</p>
//     <button onClick={handleClick}>
//       {ativo ? "Ativo" : "Inativo"}
//     </button>
//     <button onClick={() => setContar((contar) => contar + 1)}>
//       count is {contar}
//     </button>
//     <Modal modal={modal} setModal={setModal} />
//     <ButtonModal setModal={setModal} />
//   </div>
//   )
// }

// * useState + useEffect
// const App = () => {
//   const [contar, setContar] = React.useState(0);
//   const titulo = 'Clicou ';

//   React.useEffect(() => {
//     document.title = titulo + contar;
//   }, [contar])

//   return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
// }

// const App = () => {
//   const [contar, setContar] = useState(0);

//   // Um array vazio sempre indica que o efeito não possui nenhuma dependência,
//   // assim o mesmo só irá ocorrer quando o componente é renderizado inicialmente (montado)
//   // o efeito ocorre logo após a renderização do mesmo
//   React.useEffect(() => {
//     console.log("Apenas quando renderiza");
//   }, []);

//   // Antes de renderizar e toda vez que atualizar o componente
//   console.log("Sempre ocorre, mas antes do useEffect");

//   // Sempre que tiver alguma atualização, evento, uso do useState
//   React.useEffect(() => {
//     // Meio parecido com o de cima
//     // console.log("Qualquer atualização que tiver");
//   });

//   React.useEffect(() => {
//     console.log("Toda vez que atualiza o contar");
//   });

//   return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
// };

export default App
