import { useState } from "react";
import Input from "./Form/Input";
import Select from "./Form/Select";
import Radio from "./Form/Radio";
import Checkbox from "./Form/Checkbox";

// * Versão 1
// function App() {
//   const [nome, setNome] = useState();

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(nome);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="nome" style={{ marginBottom: 10 }}>Nome:</label>
//       <input type="text" name="nome" id="nome" value={nome} onChange={({ target: { value } }) => setNome(value)} />
//       {nome}
//       <div>
//         <button type="submit">Enviar</button>
//       </div>
//     </form>
//   )
// }

// * Versão 2
// * Múltiplos estados
// const App = () => {
//   const [nome, setNome] = useState("");
//   const [email, setEmail] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(nome, email);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="nome" style={{ marginBottom: 10 }}>
//         Nome:
//       </label>
//       <input
//         type="text"
//         name="nome"
//         id="nome"
//         value={nome}
//         onChange={({ target: { value } }) => setNome(value)}
//       />
//       <label htmlFor="email" style={{ marginBottom: 10 }}>
//         Email:
//       </label>
//       <input
//         type="email"
//         name="email"
//         id="email"
//         value={email}
//         onChange={({ target: { value } }) => setEmail(value)}
//       />

//       <div>
//         <button type="submit">Enviar</button>
//       </div>
//     </form>
//   );
// }


// * Versão 3
// * Objeto para controle de form
const App = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    produto: "",
    cor: "",
    fruta: "",
    linguagens: [],
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkbox</h2>
        <Checkbox options={['Inglês', 'Português']} value={form.linguagens} setValue={value => { setForm({ ...form, linguagens: value }) }}/>
        <h2>Cores</h2>
        <Radio options={['azul', 'amarelo']}  value={form.cor} setValue={value => { setForm({ ...form, cor: value }) }}/>
        <h2>Frutas</h2>
        <Radio options={['limão', 'laranja']}  value={form.fruta} setValue={value => { setForm({ ...form, fruta: value }) }}/>
        <Input
          id="nome"
          label={"Nome:"}
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange} />
        <Input
          id="email"
          label={"Email:"}
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange} />

        <Select opcoes={["notebook", "smartphone", "tablet"]} value={form.produto} setValue={value => { setForm({ ...form, produto: value }) }} />

        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>

    </>
  );
};

export default App;
