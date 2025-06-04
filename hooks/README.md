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
- o usuário está na página de contato e etc.

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
e irá modificar o estado para o valor que for retornado na função.

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

**O modo estrito invoca duas vezes a renderização do componente**,
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

## useEffect || React.useEffect

Todo componente possui um ciclo de vida.

Os primeiros momentos acontecem quando o componente é:
**renderizado, atualizado ou destruído**.

Com o `React.useEffect()` podemos definir um callback que irá ser
executado durante certos momentos do ciclo de vida do componente.

// Importante!
! Utilizamos o useEffect para adicionarmos eventos diretos ao DOM.

```javascript
const App = () => {
  const [contar, setContar] = React.useState(0);

  React.useEffect(() => {
    console.log("Ocorre ao renderizar e ao atualizar");
  });

  return <button onClick={() => setContar(contar + 1)}>Contar</button>;
};
```

## Array de dependências

no `useEffect` podemos definir dois argumentos,
o primeiro é a função de callback que será executada,
o segundo é uma array com uma lista de dependências.

a lista de dependências serve para informamos quando o efeito deve ocorrer.

```javascript
const App = () => {
  const [contar, setContar] = React.useState(0);

  // Um array vazio sempre indica que o efeito não possui nenhuma dependência,
  // assim o mesmo só irá ocorrer quando o componente é renderizado inicialmente (montado)
  // o efeito ocorre logo após a renderização do mesmo
  React.useEffect(() => {
    console.log("Apenas quando renderiza");
  }, []);

  // Antes de renderizar e toda vez que atualizar o componente
  console.log("Sempre ocorre, mas antes do useEffect");

  // Sempre que tiver alguma atualização, evento, uso do useState
  React.useEffect(() => {
    console.log("Qualquer atualização que tiver");
  });

  React.useEffect(() => {
    console.log("Toda vez que atualiza o contar");
  }, [contar]);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};
```

## Dependências Obrigatórias

Se utilizarmos o valor de um hook ou propriedade dentro de um efeito,
ele irá indicar a necessidade de definirmos o mesmo como uma
dependência na array.

```javascript
const App = () => {
  const [contar, setContar] = React.useState(0);
  const titulo = "Clicou ";

  React.useEffect(() => {
    document.title = titulo + contar;
  }, []);

  // a correção
  // },[contar])

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};
```

## Componente Montou

o `useEffect` será especialmente utilizado quando precisamos
definir um efeito que deve ocorrer uma vez apenas,
como o fetch de dados no servidor por exemplo.

```javascript
const App = () => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    // se o fetch estivesse fora do useEffect, toda vez que o componente
    // fosse montado, o mesmo seria executado
    fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <div>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contar}</p>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};
```

## Múltiplos Efeitos

Podemos ter diversos `useEffect` no nosso código.
O ideal é separarmos efeitos diferentes em `useEffect` diferentes.

```javascript
const App = () => {
  const [contar, setContar] = React.useState(0);
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {
    document.title = titulo + contar;
  }, []);

  React.useEffect(() => {
    setContar(0);
  }, [contar]);

  return (
    <div>
      {modal && <p>Meu modal</p>}
      <button onClick={() => setModal(!modal)}>Modal</button>
      <hr />
      <button onClick={() => setContar(contar + 1)}>Contar</button>
    </div>
  )
};
```

## Antes de desmontar

As vezes precisamos executar um efeito sempre que um componente for desmontado.
Para isso, utilizamos um callback no retorno do callback do efeito.

Produto.js:
```javascript
  const Produto = () => {
    // Utilizamos o useEffect para adicionarmos eventos diretos ao DOM
    React.useEffect(() => {
      function handleScroll(event) {
        console.log(event);
      }
      window.addEventListener('scroll', handleScroll);
      // Limpa o evento quando o elemento é removido do DOM.
      return () => {
        window.addEventListener('scroll', handleScroll);
      }
    }, []);

    return <p style={{ height: '200vh'}}> Produto </p>;
  }
```

App.js
```javascript
  const App = () => {
    const [ativo, setAtivo] = React.useState(false);

    return (
      <div>
        <p>Meu app</p>
        <button onClick={() => setAtivo(true)}>Abrir</button>
        {ativo && <Produto />}
      </div>
    )
  }
```
