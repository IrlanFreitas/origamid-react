import React from 'react'
import GlobalContext from './GlobalContext'

const Produto = () => {
  const global = React.useContext(GlobalContext)

  return (
    <div>
      {global.produtos?.map(produto => <p>{produto}</p>)}
    </div>
  )
}

export default Produto

