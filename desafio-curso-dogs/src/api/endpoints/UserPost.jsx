import React, { useState } from 'react'
import URL from '../URL';

const UserPost = () => {

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(URL + "/api/user", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, email, password
      })
    }).then(response => {
      console.log(response)
      return response.json()
    }).then(json => {
      console.log(json);
    })

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username' value={username} onChange={({ target }) => setUsername(target.value)} />
        <input type="text" placeholder='email' value={email} onChange={({ target }) => setEmail(target.value)} />
        <input type="text" placeholder='password' value={password} onChange={({ target }) => setPassword(target.value)} />

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default UserPost
