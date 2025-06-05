
import React from 'react'

function operacaoLenta() {
  let c;
  for (let i = 0; i < 1000000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const UseMemoTest = () => {
  const [contar, setContar] = React.useState(0);
  const t1 = performance.now();
  // const valor = React.useMemo(() => operacaoLenta(), []);
  // é mais rápido que
  const valor = operacaoLenta();
  console.log(valor);
  console.log('Time: ', performance.now() - t1);

  return <button onClick={() => setContar(contar + 1)}>{valor}</button>;
};


export default UseMemoTest
