import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome" style={{ marginBottom: 10 }}>
        Nome:
      </label>
      <input
        type="text"
        name="nome"
        id="nome"
        value={form.nome}
        onChange={handleChange}
      />
      <label htmlFor="email" style={{ marginBottom: 10 }}>
        Email:
      </label>
      <input
        type="email"
        name="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />

      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};

export default App;
