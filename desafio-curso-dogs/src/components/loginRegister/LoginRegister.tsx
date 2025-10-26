import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import useForm from "../../hooks/useForm";
import { createUser } from "../../services/api";
import Button from "../button/Button";
import Input from "../input/Input";
import Error from "../error/Error";
import useFetch from "../../hooks/useFetch";

// TODO - Melhoria no fluxo de cadastro:
// * [ ] Informação de criado com sucesso - Falta
// * [ ] Notificação de sucesso na tela - tentar fazer na mão uma div de notificação
// * [x] Tratamento de erros - adicionar teste unitário e integração
// * [x] Redirecionar para tela principal - fazer teste de redirect

const LoginRegister = () => {
  const { error, loading, userLogin } = useContext<any>(UserContext);

  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const [errorCriar, setErrorCriar] = useState("");
  const [loadingCriar, setLoadingCriar] = useState(false);
  // const { loading, error, request } = useFetch();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (username.validate() && username.validate() && password.validate()) {
      try {
        setErrorCriar("");
        setLoadingCriar(true);

        const result = await createUser(
          username.value,
          email.value,
          password.value
        );

        const json = await result.json();

        if (json?.code === "error") {
          setErrorCriar(json?.message);
          return;
        }

        await userLogin(username.value, password.value);
      } catch (error: any) {
        console.log(error);

        setErrorCriar(error.message);
      } finally {
        setLoadingCriar(false);
      }
    }
  };

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />

        {loading || loadingCriar ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button type="submit">Cadastrar</Button>
        )}

        <Error error={error || errorCriar} />
      </form>
    </section>
  );
};

export default LoginRegister;
