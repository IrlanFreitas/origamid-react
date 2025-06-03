import { useState } from 'react'
import Modal from './Modal';
import ButtonModal from './ButtonModal';


function App() {
  const [contar, setContar] = useState(0);
  const [ativo, setAtivo] = useState(false);
  const [dados, setDados] = useState({ nome: 'Irlan', idade: '30' });
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setAtivo(!ativo)
    setDados({ ...dados, faculdade: 'Sim' })
  }

  return (<div >
    <p>{dados.nome}</p>
    <p>{dados.idade}</p>
    <p>{dados.faculdade}</p>
    <button onClick={handleClick}>
      {ativo ? "Ativo" : "Inativo"}
    </button>
    <button onClick={() => setContar((contar) => contar + 1)}>
      count is {contar}
    </button>
    <Modal modal={modal} setModal={setModal} />
    <ButtonModal setModal={setModal} />
  </div>
  )
}

export default App
