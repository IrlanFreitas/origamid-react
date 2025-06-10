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
  );
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
    window.addEventListener("scroll", handleScroll);
    // Limpa o evento quando o elemento é removido do DOM.
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return <p style={{ height: "200vh" }}> Produto </p>;
};
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
  );
};
```

## useRef

Retorna um objeto com a propriedade `current`.

Esse objeto pode ser utilizado para guardarmos
**valores que irão persistir durante todo o ciclo de vida do elemento**.

Geralmente usamos o mesmo para nos referirmos a um elemento do DOM,
sem precisarmos utilizar o `querySelector` ou similar.

### .current

o melhor momento de ser usado é dentro de um callback
ou dentro de um useEffect após todos os elementos
do componente serem atualizados.

ele é current pq é um objeto mutável
`video.current = 'Teste'`
É algo completamente válido

```javascript
const App = () => {
  const video = React.useRef();

  React.useEffect(() => {
    console.log(video.current.currentTime);
  }, []);

  return <video ref={video} />;
};
```

## focus()

é comum utilizarmos em formulários,
quando precisamos de uma referência do elemento
para colocarmos o mesmo em foco.

```javascript
const App = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.state("");
  const inputElement = React.useRef();
};
```

## Referência

O seu uso não é restrito a elementos do dom.
Podemos utilizar também para guardarmos a referência de qualquer valor,
como um **setTimeout por exemplo**.

```javascript
const App = () => {
  const [contar, setContar] = React.useState(0);
  const [contar, setContar] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setNotificacao("Obrigado por comprar");
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 1000);
    setContar(contar + 1);
  }
};
```

## useMemo

Memoriza um valor,
evitando a recriação do mesmo todas as vezes em que um componente for atualizado. Recebe um callback e um array de dependências.

Caso especifícos de calculos e etc.

```javascript
const App = () => {
  const [contar, setContar] = React.useState(0);
  const valor = React.useMemo(() => {
    const localStorageItem = window.localStorage.getItem("produto");
    // Só será executado uma vez
    console.log("teste usememo");
    return localStorageItem;
  }, []);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};
```

| Serve para casos em que você faz uma
| operação lenta para retornar um valor.

useMemo Teste:

```javascript
function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const App = () => {
  const [contar, setContar] = React.useState(0);
  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);

  // é mais rápido que
  // const valor = operacaoLenta();
  console.log(performance.now() - t1);

  return <button onClick={() => setContar(contar + 1)}>{valor}</button>;
};
```

## useCallback

Permite definirmos um callback e uma lista de dependências do callback.
Esse callback só será recriado se essa lista de dependências for modificada,
caso contrário ele não irá recriar o callback.

```javascript
const App = () => {
  const [contar, setContar] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setContar((contar) => contar + 1);
  }, []);
};
```

| Dificilmente você irá encontrar
| um cenário em que essa função seja útil

## useCallback Teste

Uma prova de que o useCallback não irá criar uma nova função.
Isso não significa que ele é mais ou menos otimizado.
O Set() é utilizado pois ele permite apenas valores únicos dentro do mesmo.

```javascript
const set1 = new Set();
const set2 = new Set();

const Produto = () => {
  const func1 = () => {
    console.log("Teste");
  };

  const func2 = React.useCallback(() => {
    console.log("Teste");
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log("Set1:", set1);
  console.log("Set2:", set2);
  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
};

const App = () => {
  const [contar, setContar] = React.useState(0);

  return (
    <div>
      <Produto />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};
```

## useContext && createContext

antes de falar do `useContext` temos que aprender sobre o:
`createContext`

## createContext

O contexto irá permitir passarmos dados/estado a todos os
componentes, sem a necessidade de utilizar propriedades.

Serve principalmente para dados/estados globais como por exemplo
dados do usuário logado.

**UserContext.js**

```javascript
import React from "React";

const UserContext = React.createContext();

export default UserContext;
```

Entendendo sobre o `Consumer` e o `Provider`

## Provider

O método **Provider** deve ser utilizado para envolver todos os elementos
que terão acesso aos dados do **Context**.
Provider recebe uma propriedade chamada **value**, dentro dela que devemos
informar os dados do contexto.

App.js

```javascript
import React from "react";
import Produto from "./Produto";
import UserContext from "./UserContext";

const App = () => {
  return (
    <UserContext.Provider value={{ André }}>
      <Produto />
    </UserContext.Provider>
  );
};

export default App;
```

## useContext

O `useContext` é o hook que deve ser utilizado para consumirmos e termos
assim acesso aos dados de `value`. Devemos passar o contexto criado
como seu argumento.

Produto.js

```javascript
import React from "react";
import UserContext from "./UserContext";

const Produto = () => {
  // Aqui
  const user = React.useContext(UserContext);

  return <p>Produto de: {user.nome}</p>;
};

export default Produto;
```

## GlobalStorage

Exemplo de uso real do context. Podemos passar qualquer coisa
no value do context, até estados e funções atualizadoras do `useState`

App.js

```javascript
import React from "react";
import Produto from "./Produto";
import { GlobalStorage } from "./GlobalContext";

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default App;
```

GlobalContext.j

```javascript
import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [carrinho, setCarrinho] = React.useState(0);

  return (
    <GlobalContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </GlobalContext.Provider>
  );
};
```

Produto.js

```javascript
import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const global = React.useContext(GlobalContext);

  function handleClick() {
    global.setCarrinho((carrinho) => carrinho + 1);
  }

  return (
    <p>
      Total: {global.carrinho}: <button onClick={handleClick}>Adicionar</button>
    </p>
  );
};

export default Produto;
```

## Custom Hooks

Podemos criar nossos próprios hooks, assim evitamos a repetição de código.
Todo custom hook deve começar com a palavra `use`,
exemplo: `useNomeDoHook`.

Podemos retornar o que quisermos do hook, seja um **valor único**, uma **array** ou
um **objeto**.

### useLocalStorage

useLocalStorage

```javascript
const useLocalStorage = (key, inicial) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : inicial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};
```

App.js

```javascript
import useLocalStorage from "./useLocalStorage";

const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <p>Preferido: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  );
};
```

## useFetch

Aqui o useCallback é necessário para evitar um render infinito.

```javascript
import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { data, loading, error, request };
};

export default useFetch;
```

App.js

```javascript
import React from "react";
import useFetch from "./useFetch";

const App = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    request("https://ranekapi.origamid.dev/json/api/produto/notebook");
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data) return <div>{data.nome}</div>;
  else return null;
};

export default App;
```

## Regras

### Top Level

Não utilize os hooks dentro das funções, loops ou condicionais.

```javascript
const App = () => {
  // Correto
  React.useEffect(() => {
    document.title = "Título novo";
  }, []);

  let condicao = true;
  if (condicao) {
    // Errado
    React.useEffect(() => {
      document.title = "Título novo";
    }, []);
  }

  function mudarTitulo() {
    // Errado
    React.useEffect(() => {
      document.title = "Título novo";
    }, []);
  }

  for (let i = 0; i < 10; i++) {
    // Errado
    React.useEffect(() => {
      document.title = "Título novo";
    }, []);
  }

  return <div></div>;
};
```

### Componentes e Custom Hooks

Utilize hooks apenas em componentes e em custom hooks.

```javascript
import React from "react";

// Errado, mas pode se transformar em um custom hook se começar com useNumeroAleatorio
function numeroAleatorio() {
  const numero = Math.random();
  React.useEffect(() => {
    document.title = numero;
  }, []);
  return numero;
}

const App = () => {
  return <div></div>;
};

export default App;
```
