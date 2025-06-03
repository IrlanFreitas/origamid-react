
const Modal = ({ modal, setModal }) => {
  return (
    <div>
      {modal ? <> Modal Aberto <button onClick={() => setModal(false)}>Fechar</button></> : "Modal fechado "}

    </div >
  )
}

export default Modal
