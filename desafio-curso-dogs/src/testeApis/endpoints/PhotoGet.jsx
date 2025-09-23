import React from 'react'
import URL from '../URL'

const PhotoGet = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(URL + '/api/photo').then(response => {
      console.log(response)
      return response.json()
    }).then(json => {
      console.log(json);
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default PhotoGet
