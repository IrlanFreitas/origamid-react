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

## Múltiplos Campos

## Objeto

## Exercício