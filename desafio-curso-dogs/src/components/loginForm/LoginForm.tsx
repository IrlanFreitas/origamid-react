import { useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/login.jpg";
import styles from "./LoginForm.module.scss";
import Input from "../input/Input";
import Button from "../button/Button";
import useForm from "../../hooks/useForm";

const LoginForm = () => {
  const [token, setToken] = useState<string>();

  const username = useForm("email");
  const password = useForm();

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      fetch(apiUrl + "/jwt-auth/v1/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
        }),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          setToken(json);
          console.log(json);
        });
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

        <Link to="/login/criar">Cadastro</Link>
      </div>
    </section>
  );
};

export default LoginForm;
