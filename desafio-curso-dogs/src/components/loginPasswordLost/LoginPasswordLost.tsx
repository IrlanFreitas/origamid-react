import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import { PASSWORD_POST } from "../../services/apiStructure";
import Button from "../button/Button";
import Error from "../error/Error";
import Input from "../input/Input";
import Head from "../../helper/Head";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_POST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      request(url, options);
    }
  };

  return (
    <section>
      <Head title="Procurando uma nova senha?" />
      <h1 className="title">Perdeu a senha</h1>
      {data ? (
        <>
          <p style={{ marginBottom: 5 }}>{data}</p>
          <Button onClick={() => navigate("/login")}>Voltar para login</Button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input
            disabled={loading}
            label="Email / Usuário"
            type="text"
            name="login"
            {...login}
          />
          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button type="submit">Enviar email</Button>
          )}
        </form>
      )}
      {error && <Error error={error} />}
    </section>
  );
};

export default LoginPasswordLost;
