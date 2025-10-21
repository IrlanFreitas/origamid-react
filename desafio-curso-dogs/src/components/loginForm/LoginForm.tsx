import { useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/login.jpg";
import styles from "./LoginForm.module.scss";
import Input from "../input/Input";
import Button from "../button/Button";
import useForm from "../../hooks/useForm";
import * as service from "../../services/api";
import { UserContext } from "../../contexts/UserContext";

const LoginForm = () => {
  const { userLogin, error, loading } = useContext<any>(UserContext);
  const divRef = useRef<HTMLParagraphElement | null>(null);

  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      service.getUser(token);
    }
  }, []);

  useEffect(() => {
    if (divRef.current) {
      setTimeout(() => {
        const el = divRef.current;
        if (el) {
          el.style.display = "none";
        }
      }, 3000);
    }
  }, [error]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      await userLogin(username.value, password.value);
    }
  };

  return (
    <section className={styles.container}>
      <img
        src={img}
        alt="Um cachorro com uma touca amarela e uma blusinha cinza"
      />
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <Input label="Login" type="text" name="username" {...username} />
          <Input type="password" label="Senha" name="password" {...password} />
          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button type="submit">Entrar</Button>
          )}
          {error && (
            <p ref={divRef} id="error">
              {error}
            </p>
          )}
        </form>

        {/* <p style={{ wordBreak: "break-all" }}>{token?.token}</p> */}

        <Link to="/login/criar">Cadastro</Link>
      </div>
    </section>
  );
};

export default LoginForm;
