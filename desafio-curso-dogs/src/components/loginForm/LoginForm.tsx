import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/login.jpg";
import styles from "./LoginForm.module.scss";
import Input from "../input/Input";
import Button from "../button/Button";
import useForm from "../../hooks/useForm";
import * as service from "../../services/api";
import { UserContext } from "../../contexts/UserContext";
import Error from "../error/Error";
import stylesButton from "../button/Button.module.scss";

const LoginForm = () => {
  const { userLogin, error, loading } = useContext<any>(UserContext);

  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      service.getUser(token);
    }
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      await userLogin(username.value, password.value);
    }
  };

  return (
    <section className="animeLeft">

      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Login" type="text" name="username" {...username} />
        <Input type="password" label="Senha" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button type="submit">Entrar</Button>
        )}

        <Error error={String(error)} />
      </form>

      <br />
      <br />
      <Link className={styles.perdeu} to="/login/perdeu">
        Esqueceu a senha?
      </Link>
      <br />
      <br />
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
      </div>
      <Link className={stylesButton.button} to="/login/criar">
        Cadastro
      </Link>
    </section>
  );
};

export default LoginForm;
