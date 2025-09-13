# React.memo

Retorna um componente memorizado, evitando que o mesmo seja atualizado
toda vez que o estado de um elemento pai mudar. Use apenas para elementos
que não dependam de estados diferentes.

App.js
```js
import React from 'react';
import Header from './Header';

const App = () => {
  const [contar, setContar] = React.useState(0);
  return (
    <div>
      <Header />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
```

Header.js
```js
import React from 'react';

const Header = () => {
  console.log('Renderizou');
  return <div>Header fixo</div>;
};

export default React.memo(Header);
```