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
    setForm({ ...form, [id]: value})
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

## Objeto

## Exercício
