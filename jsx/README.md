# JSX

Javascript XML/Extension. Estende a sintaxe do JavaScript,
introduzindo elementos como xml que são convertidos em funções
de React.

```javascript
const App = () => [
  return <button>Comprar</button>
]
```

é transformado em:

```javascript
const App = () => {
  return React.createElement("button", null, "Comprar");
};
```

| É possível utilizar a extensão
| .jsx

## Atributos

Atributos podem ser passados como no HTML, porém com alguns
casos especiais.

```javascript
const App = () => {
  return (
    <a href="https://www.origamid.com" title="Site Origamid">
      Origamid
    </a>
  );
};
```

## Casos Especiais

O caso especial mais comum é o atributo class.
Pelo fato de classe ser uma palavra reservada do Javascript,
o JSX resolveu mudar o nome para evitar conflitos
O correto é **className**.

```javascript
const App = () => {
  return <div className="grid">Origamid</div>;
};
```

```javascript
const App = () => {
  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
    </form>
  );
};
```

## camelCase

Atributos com nomes compostos devem ser utilizados como camelCase.
Exemplo: autoplay vira autoPlay

```javascript
const App = () => {
  return <video autoPlay />;
};
```

## Expressões / Variáveis {"se isso" === true ? "então isso" : "se não isso"}

Expressões e variáveis podem ser colocados dentro do JSX, utilizando chaves `{}`

```javascript
const App = () => {
  const nome = "André";
  return <p>{nome}</p>;
};
```

```javascript
const App = () => {
  const desconto = 50;
  const preco = 250;
  return <p>{preco - desconto}</p>;
};
```

```javascript
const App = () => {
  return;
};
```

## Style style={{}}

O style irá receber um objeto com as propriedades do elemento em camelCase.

```javascript
const App = () => {
  const estiloh1 = {
    color: "blue",
    fontSize: "20px",
    fontFamily: "Helvetica",
  };

  return (
    <div>
      <h1 style={estiloH1}> Empresa </h1>
      <p style={{ color: "green" }}>Sempre aberta</p>
    </div>
  );
};
```

# Exercício

Mostre os dados da aplicação, como apresentado no vídeo
Não utilize CSS externo, use o style para mudar as cores
Se a situação estiver ativa pinte de verde, inativa vermelho
Se o gasto for maior que 1000 mostre uma mensagem

## JSX Arrays

O JSX irá listar cada um dos itens da array. Ele não irá separar ou
colocar vírgula, é você que deve modificar a array para o resultado
desejado.

```javascript
const App = () => {
  const produtos = ["Notebook", "Smartphone", "Tablet"];

  // resultado:
  // NotebookSmartphoneTablet
  return <p>{produtos}</p>;
};
```

## Keys

O JSX necessita de uma única key para cada elemento da Array:
https://reactjs.org/docs/lists-and-keys.html

```javascript
const App = () => {
  const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>];

  return <ul>{empresas}</ul>;
};
```

## Map

É comum usarmos o map direto na array como uma expressão, retornando
um elemento para cada item novo da Array.

```javascript
const App = () => {
  const filmes = ["Before Sunrise", "Before Sunset", "Before Midnight"];

  return (
    <ul>
      {filmes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
    </ul>
  );
};
```

## Array de Objetos

O cenário mais comum é trabalhar com array`s de objetos.

```javascript
const App = () => {
  const livros = [
    { nome: "A Game of Thrones", ano: 1996 },
    { nome: "A Clash of Kings", ano: 1998 },
    { nome: "A Storm of Swords", ano: 2000 },
  ];

  return (
    <ul>
      {livros
        .filter((livro) => livro.ano >= 1998)
        .map((livro) => (
          <li key={livro.nome}>
            {livro.nome}, {livro.ano}
          </li>
        ))}
    </ul>
  );
};
```
