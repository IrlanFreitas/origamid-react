# Propriedades/Props ({ props })

Assim como uma função pode receber argumentos, podemos também passar argumentos aos componentes.
Esses são conhecimentos como **propriedades ou props**.

```javascript
const Titulo = (props) => {
  return <h1 style={{color: props.cor}}>{props.texto}</h1>
}

const App = () => {
  return (
    <section>
      <Titulo cor="red" texto="Meu Primeiro Título">
      <Titulo cor="blue" texto="Meu Segundo Título">
    </section>
  )
}
```

## Children ({ props :{ children }})

Se utilizarmos o componente abrindo e fechando o mesmo,
o conteúdo interno deste será acessado através da propriedade
`children`.

```javascript
const Titulo = (props) => {
  return <h1>{props.children}</h1>;
};

const App = () => {
  return (
    <section>
      <Titulo>Meu primeiro Título</Titulo>
      <Titulo>
        <p>Título 2</p>
        <p>Título 3</p>
      </Titulo>
    </section>
  );
};
```

## Rest e Spread (...)

Usamos o rest e spread quando não sabemos todas as propriedades
que um componente pode receber.

```javascript
import React from 'react';

const Input = ({label, id, ...props}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props}>
    </div>
  );
};

export default Input;
```

| Podemos ser criativos com a propriedades

## Dados

Podemos passar diferentes tipos de dados
e até outros componentes nas propriedades.

```javascript
  const App = () => {
    const logado = true;
    const nome = 'André';

    return (
      <section>
        <Header logado={logado} nome={nome}>
      <section>
    )
  }
```

```javascript
const Header = ({ logado, nome }) => {
  if (logado) {
    return <header>Bem vindo, {nome}</header>;
  } else {
    return <header>Header</header>;
  }
};
```
