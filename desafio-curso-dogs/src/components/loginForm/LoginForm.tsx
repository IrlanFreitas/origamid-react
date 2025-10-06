import { useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/login.jpg";
import styles from "./LoginForm.module.scss";
import Input from "../input/Input";
import Button from "../button/Button";

const LoginForm = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [token, setToken] = useState<string>();

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = (event: any) => {
    event.preventDefault();

    fetch(apiUrl + "/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
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
          <Input
            label="Login"
            type="text"
            name="username"
            value={username}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setUsername(event.target.value);
            }}
          />
          <Input
            type="password"
            label="Senha"
            name="password"
            value={password}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setPassword(event.target.value);
            }}
          />
          <Button type="submit">Entrar</Button>
        </form>

        <Link to="/login/criar">Cadastro</Link>
      </div>
    </section>
  );
};

export default LoginForm;
