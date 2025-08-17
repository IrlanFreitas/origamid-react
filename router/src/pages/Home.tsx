import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Essa é a página de home</p>

      <Link to="produto/notebook">Notebook</Link> {' '} | {' '}
      <Link to="produto/smartphone">Smartphone</Link>
      <br />
      <br />
    </div>
  );
};

export default Home;
