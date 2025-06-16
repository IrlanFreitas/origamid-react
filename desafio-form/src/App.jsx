import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  })

  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if(success) {
      setTimeout(() => {
        setSuccess(false)
      }, 3000)
    }
  }, [success]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setSuccess(false)
      const response = await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // form é o objeto com os dados do formulário
        body: JSON.stringify(form),
      });
      const json = await response.json()
      console.log(json);
      console.log(response);
      if (response.ok) {
        setSuccess(true)
      }
    } catch (err) {
      console.log(err.message);
    }

  }

  const handleChange = ({ target }) => {
    const { id, value } = target
    setForm({ ...form, [id]: value })
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      {Object.keys(form)?.map(formItem => {
        return <>
          <label htmlFor={formItem} className='label'>{formItem}:</label>
          <input type="text" name={formItem} id={formItem} onChange={handleChange} />
        </>
      })}
      {success && <p>Formulário enviado com sucesso</p>}
      <button type="submit">Enviar</button>
    </form>
  )
}

export default App
