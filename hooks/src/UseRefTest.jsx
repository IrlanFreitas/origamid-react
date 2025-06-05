import React from 'react'

// const UseRefTest = () => {
//   const video = React.useRef();

//   React.useEffect(() => {
//     console.log(video.current);
//   }, [])

//   return (
//     <video ref={video}></video>
//   )
// }

const UseRefTest = () => {
  const [comentarios, setComentarios] = React.useState(['teste', 'teste 2']);
  const [input, setInput] = React.useState("");
  const inputElement = React.useRef();

  function handleClick() {
    setComentarios([...comentarios, input])
    setInput("")

    // Isso é o mesmo que usar o useRef(), só que do jeito React.
    // const inputLabel = document.querySelector('#input')
    // inputLabel.focus()
    // Botar o foco novamente no input com o useRef
    inputElement.current.focus()
  }

  return (
    <div>
      <ul>
        {comentarios.map(comentario => <li key={comentario}>{comentario}</li>)}
      </ul>
      <input id='input' ref={inputElement} type="text" value={input} onChange={({ target: { value } }) => setInput(value)} />
      <button onClick={handleClick} type="submit">Enviar</button>
    </div>
  )
}

export default UseRefTest
