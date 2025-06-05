import { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalStorage = ({ children }) => {

  const [produtos, setProdutos] = useState([]);

  const fetchProdutos = () => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then(response => response.json())
      .then(response => setProdutos(response))
  }

  useEffect(() => {
    fetchProdutos()
  }, [])

  const limparDados = () => {
    setProdutos([])
  }


  return <GlobalContext.Provider value={{ produtos, limparDados, carregaDados: fetchProdutos }}>
    {children}
  </GlobalContext.Provider>
}