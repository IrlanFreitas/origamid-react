import React from 'react'
import './Opcoes.css'

const Opcoes = ({ options, index, setRespostas }) => {
  return (
    <div className='opcoes'>
      {options?.map(opcao =>
        <label key={opcao}>
          <input type='radio' id={opcao} name={index} value={opcao}
            onChange={() => setRespostas(prevState => [...prevState, opcao])} />
          {opcao}
        </label>)}
    </div>
  )
}

export default Opcoes
