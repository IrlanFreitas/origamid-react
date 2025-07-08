# Formulários

## Reatividade

Para criarmos campos de formulário reativos,
devemos sempre definir o estado para o `value`
e a função atualizadora para o `onChange`.

```javascript
const App = () => {
  const [nome, setNome] = React.useState('');

  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      >
      <p>{nome}</p>
    </form>
  )
}
```

## Form

No `form` controlamos o que acontece ao enviar o mesmo,
por isso definimos uma função para lidar com o `onSubmit`.
O `preventDefault()` irá prevenir o comportamento padrão,
que seria atualizar a página, enviando uma requisição
para o que estiver em `action=""`

```javascript
const App = () => {
  const [nome, setNome] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nome);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome" style={{ marginBottom: 10 }}>
        Nome:
      </label>
      <input
        type="text"
        name="nome"
        id="nome"
        value={nome}
        onChange={({ target: { value } }) => setNome(value)}
      />
      {nome}
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};
```

## Múltiplos Campos

Existem duas formas de lidarmos com múltiplos campos.

1ª Podemos definir um estado para cada campo.

```javascript
const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nome, email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome" style={{ marginBottom: 10 }}>
        Nome:
      </label>
      <input
        type="text"
        name="nome"
        id="nome"
        value={nome}
        onChange={({ target: { value } }) => setNome(value)}
      />
      <label htmlFor="email" style={{ marginBottom: 10 }}>
        Email:
      </label>
      <input
        type="text"
        name="email"
        id="email"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
      />

      {(nome, email)}
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};
```

## Objeto

2ª Podemos definir um objeto que irá conter
todos os valores dos campos do formulário.

```javascript
const App = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome" style={{ marginBottom: 10 }}>
        Nome:
      </label>
      <input
        type="text"
        name="nome"
        id="nome"
        value={nome}
        onChange={({ target: { value } }) => setNome(value)}
      />
      <label htmlFor="email" style={{ marginBottom: 10 }}>
        Email:
      </label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
      />

      {(nome, email)}
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};
```

## Exercício

## Textarea

No React o `textarea` é utilizado como um input,
um tag única sem abertura/fechamento e com o value
para definir o seu valor interno.

```javascript
  const App = () => {
    const [mensagem, setMensagem] = React.useState('');

    return (
      <form>
        <textarea
          id="mensagem"
          value={mensagem}
          rows="5"
          onChange={({target}) => setMensagem(target.value)}
        >
        <p>{mensagem}</p>
      </form>
    )
  }
```

## Select

O `value` e `onChange` são definidos no select.
Para definir um valor inicial, coloque o mesmo no `useState`.

```javascript
  const App = () => {
    const [select, setSelect] = React.useState('smartphone');

    return (
      <form>
        <select value={select} onChange={({target}) => {setSelect(target.value)}}>
          <option value="notebook">Notebook<option>
          <option value="smartphone">Smartphone<option>
          <option value="tablet">Tablet<option>
        </select>
        <p>{select}<p>
      </form>
    )
  }
```

## Radio

No radio comparamos o valor selecionado com o valor do input,
dentro do atributo checked. O que retornar true irá marcar o botão.

```javascript
const App = () => {
  const [radio, setRadio] = React.useState("");

  function handleChange({ target }) {
    setRadio(target.value);
  }
};

return (
  <form>
    <label>
      <input
        type="radio"
        value="smartphone"
        name="produto"
        checked={radio === "smartphone"}
        onChange={handleChange}
      >
        Smartphone
      </input>
    </label>
    <label>
      <input
        type="radio"
        value="notebook"
        name="produto"
        checked={radio === "notebook"}
        onChange={handleChange}
      >
        Notebook
      </input>
    </label>
  </form>
);
```

## Checkbox

O estado do checkbox está relacionado ao checked.

```javascript
  const App = () => {
    const [checkbox, setCheckbox] = React.useState(false);

    function handleChange({ target }) {
      setCheckbox(target.checked);
    }

    return (
      <form>
        <label>
          <input
            type="checkbox"
            value="termos"
            checked={checkbox}
            onChange={handleChange}
          >
          Li os termos.
        </label>
      </form>
    )
  }
```

## Múltiplos

Podemos definir um estado para cada item ou uma array que irá conter todos os itens selecionados.

```javascript
const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={handleChecked('azul')}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={handleChecked('vermelho')}
          onChange={handleChange}
        />
        Vermelho
      </label>
      <label>
        <input
          type="checkbox"
          value="verde"
          checked={handleChecked('verde')}
          onChange={handleChange}
        />
        Verde
      </label>
      <label>
        <input
          type="checkbox"
          value="amarelo"
          checked={handleChecked('amarelo')}
          onChange={handleChange}
        />
        Amarelo
      </label>
      <label>
        <input
          type="checkbox"
          value="roxo"
          checked={handleChecked('roxo')}
          onChange={handleChange}
        />
        Roxo
      </label>
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};
```

## Component Input

Podemos definir um componente para cada tipo de campo de formulário,
assim evitamos criar código repetido.

Input.js
```javascript
  const Input = ({ id, label, setValue, ...props}) => {
    return (
      <> 
        <label htmlFor={id}>{label}</label>
        <input
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props} />
      </>
    )
  }
```