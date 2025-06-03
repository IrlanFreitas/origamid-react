# Hooks

São funções especiais do React que permitem:
**controlarmos o estado e o ciclo de vida de componentes funcionais**.
Isso antes só era possível com classes.

```javascript
const App = () => {
  const [ativo, setAtivo] = React.useState(true);

  return (
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? "Botão Ativo" : "Botão Inativo"}
    </button>
  );
};
```

## Estado

O estado de uma aplicação representa as características dela naquele momento.

Por exemplo:

- os dados do usuário foram carregados,
- o botão está ativo,
- o usuário
- está na página de contato e etc.

```javascript
const App = () => {
  const ativo = true;

  return (
    <button disabled={!ativo}>{ativo ? "Botão Ativo" : "Botão Inativo"}</button>
  );
};
```

## useState || React.useState

O useState é uma função que retorna um array com 2 valores.

O primeiro valor guarda o dado do estado atual, pode ser qualquer
tipo de dado como **strings, arrays, números, boolean, null, undefined e objetos**.

O segundos valor **é uma função que pode ser utilizada para modificarmos o estado do primeiro valor**.

**Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, serão renderizados novamente e seus filhos também**.
É isso que garante a reatividade de componentes funcionais no React.

```javascript
const App = () => {
  const [ativo, setAtivo] = React.useState(true);
  // É a mesma coisa que:
  // const ativoArray = React.useState(true);
  // const ativo = ativoArray[0];
  // const setAtivo = ativoArray[1];

  return (
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? "Botão Ativo" : "Botão Inativo"}
    </button>
  );
};
```

| O uso do **set**Name é uma convenção do React
| para a função de modificação do estado

## Múltiplos Estados

Não existem limites para o uso do useState,
podemos definir diversos no mesmo componente.

```javascript
const App = () => {
  const [contar, setContar] = React.useState(0);
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: "", idade: "" });

  return <div></div>;
};
```

## Props

Podemos passar o estado e a função de modificação como propriedade para outros
elementos.

```javascript
import React from "react";
import Modal from "./Modal";
import ButtonModal from "./ButtonModal";

const App = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};
```

## Reatividade

Não modifique o estado diretamente.
Utilize sempre a função de atualização do estado, pois ela que garante a reatividade dos componentes.

```javascript
const App = () => {
  const [items, setItems] = React.useState(["Item 1", "Item 2"]);

  function handleClick() {
    // Errado. Modifique o estado apenas com a função de atualização
    items.push("Novo Item");
  }

  function handleClickReativo() {
    // Correto. Eu desestruturo o array atual, criando um novo e adicionando outro valor
    setItems([...items, "Novo Item"]);
  }
};
```

## Callback

Podemos passar uma função de callback para atualizar o estado.
A função de callback recebe um parâmetro que representa o valor anterior
e irá modificar o estado para o valor que for retornado na função

```javascript
const App = () => {
  const [ativo, setAtivo] = React.useState(true);

  function handleClick() {
    // usando um callback
    setAtivo((anterior) => !anterior);
  }

  return (
    <button onClick={handleClick}>
      {ativo ? "Está ativo" : "Está inativo"}
    </button>
  );
};
```

## React.StrictMode

O modo estrito invoca duas vezes a renderização do componente,
quando o estado é atualizado. Assim é possível identificarmos
funções com efeitos colaterais (side effects) e eliminarmos as mesmas.

Funções com efeitos colaterais são aquelas que modificam estados
que estão fora das mesmas.

Isso apenas em modo de desenvolvimento, depois do bundle gerado não tem isso.

```javascript
const Contador = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(["Item 1"]);

  function handleClick() {
    setContar((contar) => {
      //* setContar possui um efeito colateral.
      setItems((items) => [...items, "Item " + (contar + 1)]);
      return contar + 1;
    });
  }

  // Feito do jeito certo, onde cada função faz apenas uma coisa
  function handleClick() {
    setContar((contar) => contar + 1);
    setItems((items) => [...items, "Item " + (contar + 1)]);
  }
};
```
