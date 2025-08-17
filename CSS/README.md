# CSS

Aqui será tratado sobre as mais diferentes formas de tratar o css com o react.

## CSS Import

A forma mais simples de uso do CSS é importando o mesmo direto no JavaScript.
A importação é feita pelo webpack

App.jsx

```javascript
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <p className="text">Meu site</p>
    </div>
  );
};
```

App.css

```css
.container {
  max-width: 30rem;
  margin: 0 auto;
}

.text {
  font-weight: bold;
}
```

### Componentes

Ao importar um componente, os estilos importados do mesmo são automaticamente
adicionados ao CSS final da build. Independente de você utilizar o componente ou não.

App.jsx

```js
import "./App.css";
import Title from "./Components/Title";

const App = () => {
  return (
    <div className="container">
      // Componente comentado, porem o import ainda existe e o css estará
      presente no build
      {/* <Title text="Meu título" /> */}
      <p className="text">Meu site</p>
    </div>
  );
};
```

Title.jsx

```js
import "./Title.css";

const Title = ({ text }) => {
  return <h1 className="Title">{text}</h1>;
};
```

Title.css

```css
.Title {
  font-size: 2rem;
  font-family: sans-serif;
}
```

### Conflito

Todos os arquivos serão unidos em um CSS final e você é responsável por garantir
que os seletores sejam específicos, para evitar conflito.

App.jsx

```js
import Title from "./Components/Title";
import Produto from "./Components/Produto";

const App = () => {
  return (
    <div>
      <Title text="Meu título" />
      <Produto />
    </div>
  );
};
```

Title.jsx

```js
import "./Title.css";

const Title = ({ text }) => {
  return <h1 className="Title">{text}</h1>;
};
```

Produto.jsx

```js
import "./Produto.css";

const Produto = () => {
  return <h1 className="Title">Notebook</h1>;
};
```

Produto.css

```css
h1 {
  color: tomato;
}

h1.Title {
  font-family: serif;
}
```

main.css (bundle final)

```css
.Title {
  font-size: 2rem;
  font-family: sans-serif;
}
h1 {
  color: tomato;
}
h1.Title {
  font-family: serif;
}
```

### Evite Conflitos

Defina nomes únicos para os componentes e coloque classes com os mesmos nomes

```js
import "./UserForm.css";

const UserForm = () => {
  return (
    <div className="UserForm">
      <h1>Formulário</h1>
      <p className="UserFormText">Esse texto.</p>
    </div>
  );
};
```

UseForm.css

```css
.UserForm h1 {
  color: tomato;
}

.UserFormText {
  font-family: serif;
}
```

## CSS Modules

Os modules garantem que as classes utilizas sejam sempre únicas, evitando o conflito.
O modo já vem configurado com o `create-react-app` (não faz mais sentido pois já estamos usando outro builder, o `vite`),
basta definirmos o nome do arquivo css com a palavra .module. Ex.:

`Produto.module.css`

Devemos definir um nome para a importação, a mesma será transformada em um objeto
que possui nomes únicos para as classes.

Produto.js

```js
import styles from "./Produto.module.css";

const Produto = () => {
  return (
    <div>
      <h1 className={styles.titulo}>Notebook</h1>
      <p className={styles.preco}>R$ 12000</p>
      <button className={styles.comprar}>Comprar</button>
    </div>
  );
};
```

Produto.module.css

```css
.titulo,
.preco {
  color: #43c;
}

.preco {
  font-weight: bold;
}

.comprar {
  transform: rotate(90deg) translateY(-100px);
}
```

| Ela gera nomes de classes apenas, então
| utilize o objeto direto className e não
| no atributo style.

### camelCase

Utilize camelCase `tituloPrincipal`, já que o nome da classe se
transformará em uma propriedade de um objeto JavaScript. Não utilize hífens `titulo-principal`.

```css
.tituloPrincipal {
  color: blue;
}
```

### Funcionalidades Extras

O CSS Modules disponibiliza algumas funcionalidades extras para o CSS,
como a definição de variáveis, composição de elementos e definição de classes no contexto global.
Não aconselho o uso, pois a sintaxe não é bem suportada pela IDE (VS Code) e pelo eslint.

```css
.titulo {
  color: #43c;
}

/* no local de composes use a vírgula .titulo, .preco {} */
.preco {
  composes: titulo;
  font-weight: bold;
}

/* no local de variáveis utilize variáveis de CSS com o var() */
@value width: 900px;

/* crie um css global utilizando o IMPORT puro para quando precisar de estilos globais */
:global .container {
  max-width: width;
}
```

## Styled Components

Permite escrevermos o CSS diretamente no JavaScript.
Ao invés de classes, criamos componentes com um estilo único.

App.jsx
```jsx
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  color: tomato;
`;

const App = () => {
  return (
    <div>
      <Title>Título principal</Title>
    </div>
  );
};
```

### Instalação

```shell
npm install styled-components
```

Plugin de VS Code
`vscode-styled-components`

### Exemplo

Extended App.jsx

```jsx
const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 2em;
`;

const Comprar = styled.button`
  font-size: 1.5em;
  background: transparent;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid;
  cursor: pointer;
`;

const Preco = styled.span`
  background: #53d956;
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;

const App = () => {
  return (
    <ProdutosContainer>
      <Produto>
        <Titulo>
          Notebook <Preco>R$ 1999</Preco>
        </Titulo>
        <Comprar>Comprar</Comprar>
      </Produto>
      <Produto>
        <Titulo>
          Smartphone <Preco>R$ 2999</Preco>
        </Titulo>
        <Comprar>Comprar</Comprar>
      </Produto>
    </ProdutosContainer>
  );
};
```

### Template String Transpilation

O uso dos backticks para passarmos a string com os valores do CSS, é válido no JavaScript.
Esses valores são passados como argumento da função.

```js
function template(value, total) {
  console.log(value);
  console.log(total);
}
const total = 10;
template`São ${total} no total`;
```

### Props

Podemos passar propriedades como em um component de React.

```jsx
const Preco = styled.p`
  background: ${(props) => props.cor};
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;

const App = () => {
  function template(value, total) {
    console.log(value);
    console.log(total);
  }
  const total = 10;
  template`São ${total} no total`;

  return (
    <div>
      <Preco cor="#53d956">R$ 2999</Preco>
      <Preco cor="#84e">R$ 1999</Preco>
    </div>
  );
};
```

### Estado

Podemos passar o estado como uma propriedade e modificarmos certos estilos
com base no mesmo.

```jsx
import styled from "styled-components";

const Button = styled.button`
  background: ${({ ativo }) => (ativo ? "#53d956" : "#000")};
  border: 1px solid black;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <Button ativo={ativo} onClick={() => setAtivo(!ativo)}>
      Ativar
    </Button>
  );
};
```

### Pseudo

Podemos definir o estado `:hover` ou criar elementos com o `::after` ou `::before`
utilizando o `&` na frente do elemento.

```jsx
const Comprar = styled.button`
  font-size: 1.5em;
  background: transparent;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid black;
  cursor: pointer;
  position: relative;
  &:hover {
    background: black;
    color: white;
  }
  &::before {
    display: block;
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    background: #53d956;
    top: -8px;
    right: -8px;
  }
`;
```

## CSS Frameworks

Podemos adicionar qualquer library/framework de css ao React.
Com o @next vamos instalar a versão 5 do bootstrap. 
Popper é necessário para algumas funções do bootstrap.

```shell
npm install bootstrap@next
```

## Animações

projetinho de animações

## Imagens

Podemos importar a imagem direto para o componente.
O webpack irá gerar o caminho correto na build final.

```js
import foto from './img/foto.jpg';

const App = () => {
  return (
    <div>
      <img src={foto} alt="Cachorro">
    </div>
  )
}
```


