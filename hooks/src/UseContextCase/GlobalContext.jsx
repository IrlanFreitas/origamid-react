import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {

  const [contar, setContar] = React.useState(0)
  const produtos = ['item 1', 'item 2']

  return <GlobalContext.Provider value={{ produtos, contar, setContar }} >{children}</GlobalContext.Provider>
}