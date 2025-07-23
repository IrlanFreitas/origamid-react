import { useState } from 'react'
import './App.css'
import Opcoes from './Components/Opcoes';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

function App() {
  const [index, setIndex] = useState(0)
  const [respostas, setRespostas] = useState([])
  const [assercoes, setAssercoes] = useState(0)

  const checkAnswers = () => {
    perguntas.map(pergunta => {
      let checagem = respostas.includes(pergunta.resposta)
      if (checagem) setAssercoes(assercoes + 1)
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIndex(index + 1)
    if (index === (perguntas.length - 1)) {
      checkAnswers()
    }
  }

  const restart = () => {
    setIndex(0)
    setAssercoes(0)
    setRespostas([])
  }

  return (
    <>
      {!(index === perguntas.length) &&
        <form className='form' onSubmit={handleSubmit}>
          <div className='container'>
            <h1 className='pergunta'>{perguntas[index].pergunta}</h1>

            <Opcoes index={index}
              options={perguntas[index]?.options}
              setRespostas={setRespostas} />
          </div>
          <button>Próxima</button>
        </form>}

      {index === perguntas.length && <div className='resultado'>
        <div className='mensagem'>Você finalizou você acertou: {assercoes} de {perguntas.length}</div>
        <button onClick={restart}>Reiniciar</button>
      </div>}
    </>
  )
}

export default App
