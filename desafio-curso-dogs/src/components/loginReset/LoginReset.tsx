import { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import Button from "../button/Button";
import Input from "../input/Input";
import { PASSWORD_RESET } from "../../services/apiStructure";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import Error from "../error/Error";
import Head from "../../helper/Head";

const LoginReset = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const newPassword = useForm();

  const { loading, error, request } = useFetch();
  const navigate = useNavigate();

  const handleNewPassword = async (event: any) => {
    event.preventDefault();
    if (newPassword.validate()) {
      const { url, options } = PASSWORD_RESET({
        login: login,
        key: key,
        password: newPassword.value,
      });
      const { response } = await request(url, options);
      if (response?.ok) navigate("/login");
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");

    // Checando se valores nas chaves passadas por url
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  return (
    <section>
      <Head title="Criei um nova senha" />
      <h1 className="title"> Resete a senha</h1>
      <form onSubmit={handleNewPassword}>
        <Input
          disabled={loading}
          label="Digite a sua nova senha:"
          type="password"
          name="password"
          {...newPassword}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button type="submit">Resetar</Button>
        )}

        {error && <Error error={error} />}
      </form>
    </section>
  );
};

export default LoginReset;
