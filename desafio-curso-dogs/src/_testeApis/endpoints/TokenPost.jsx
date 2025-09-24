import { useState } from 'react'
import URL from '../URL';

const TokenPost = () => {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState();

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(URL + "/jwt-auth/v1/token", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, password
      })
    }).then(response => {
      console.log(response)
      return response.json()
    }).then(json => {
      setToken(json);
      console.log(json);
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username' value={username} onChange={({ target }) => setUsername(target.value)} />
        <input type="text" placeholder='password' value={password} onChange={({ target }) => setPassword(target.value)} />
        <p style={{wordBreak: 'break-all'}}>{token?.token}</p>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default TokenPost
