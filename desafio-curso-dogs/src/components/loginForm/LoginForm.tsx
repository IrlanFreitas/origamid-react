import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/login.jpg";
import styles from "./LoginForm.module.scss";
import Input from "../input/Input";
import Button from "../button/Button";
import useForm from "../../hooks/useForm";
import * as service from "../../services/api";

const LoginForm = () => {
  const [token, setToken] = useState<any>();

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
      const validatedToken = await service.validateToken(
        username.value,
        password.value
      );

      window.localStorage.setItem(`token`, validatedToken?.token);

      const user = await service.getUser(validatedToken?.token);
      console.log({ user });

      // Fazer um redirect para home
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
          <Button type="submit">Entrar</Button>
        </form>

        <p style={{ wordBreak: "break-all" }}>{token?.token}</p>

        <Link to="/login/criar">Cadastro</Link>
      </div>
    </section>
  );
};

export default LoginForm;
