import React from "react";
import './App.css';

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

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

  const gerarOpcoes = () => {
    return <>{coresArray.map(cor => (<label>
        <input
          type="checkbox"
          value={cor}
          checked={handleChecked(cor)}
          onChange={handleChange}
        />
        {cor}
      </label>))}
    </>
  }

  return (
    <form>
      {gerarOpcoes()}
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
}

export default App;