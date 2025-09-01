import contato from "../../assets/contato.jpg";
import Head from "../../components/Head/Head";
import "./Contato.scss";

const Contato = () => {
  return (
    <>
      <Head
        title="Ranek | Contato"
        description="Tela com as informações de contato"
      />

      <section className="contato animeLeft">
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
      </section>
    </>
  );
};

export default Contato;
