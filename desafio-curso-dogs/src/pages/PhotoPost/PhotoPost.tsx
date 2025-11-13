import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import styles from "./PhotoPost.module.scss";
import { PHOTO_POST } from "../../services/apiStructure";
import Error from "../../components/error/Error";
import { useNavigate } from "react-router-dom";

const PhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState<any>({});
  const navigate = useNavigate();

  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    // TODO - Colocar uma notificação quando tiver sucesso e redirecionar
    if (data) navigate("/conta");
  }, [data, navigate]);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("img", img?.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window?.localStorage?.getItem("token");

    const { url, options } = PHOTO_POST(token || "", formData);
    request(url, options);
  };

  const handleImgChange = ({ target }: { target: any }) => {
    setImg({
      // * Mais uma função interessante do JS que não imaginava
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };

  return (
    <>
      <section className={`${styles.photoPost} animeLeft`}>
        <form onSubmit={handleSubmit}>
          <Input label="Nome" type="text" name="nome" {...nome} />
          <Input label="Peso" type="number" name="peso" {...peso} />
          <Input label="Idade" type="number" name="Idade" {...idade} />
          <input
            className={styles.photoInput}
            type="file"
            name="img"
            id="img"
            onChange={handleImgChange}
          />
          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button type="submit">Enviar</Button>
          )}

          {error && <Error error={String(error)} />}
        </form>
        <div>
          {img?.preview && (
            <div
              className={styles.preview}
              style={{ backgroundImage: `url(${img.preview})` }}
            ></div>
          )}
        </div>
      </section>
    </>
  );
};

export default PhotoPost;
