import React from 'react'

const Select = ({ opcoes, value, setValue, ...props }) => {

  return (
    <select value={value} onChange={({ target }) => { setValue(target.value) }} {...props}>
      <option value="" defaultChecked disabled>Selecione</option>
      {opcoes.map(opcao =>
        <option key={opcao} value={opcao}>{opcao}</option>
      )}

    </select>
  )
}

export default Select
