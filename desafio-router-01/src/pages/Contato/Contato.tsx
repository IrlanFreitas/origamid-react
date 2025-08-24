import contato from "../../assets/contato.jpg";
import "./Contato.scss";

const Contato = () => {
  return (
    <div className="contato">
      <div>
        <img
          className="contato-imagem"
          src={contato}
          alt="Imagem de máquina de escrever"
        />
      </div>
      <div className="contato-info">
        <h1 className="contato-titulo">Entre em contato.</h1>
        <p className="contato-email">irlan@lab.com</p>
        <p className="contato-telefone">77777-7777</p>
        <p className="contato-endereco">Mundo das materializações</p>
      </div>
    </div>
  );
};

export default Contato;
