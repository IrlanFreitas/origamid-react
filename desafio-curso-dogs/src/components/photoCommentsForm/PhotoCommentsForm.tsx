import { useState } from "react";
import Enviar from "../../assets/enviar.svg?react";
import styles from "./PhotoCommentsForm.module.scss";
import useFetch from "../../hooks/useFetch";
import { COMMENT_POST } from "../../services/apiStructure";
import Error from "../error/Error";

const PhotoCommentsForm = ({
  id,
  setComments,
}: {
  id: any;
  setComments: any;
}) => {
  const [comment, setComment] = useState("");

  const { request, error } = useFetch();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    console.log("click");
    const { url, options } = COMMENT_POST(id, { comment });
    console.log({ url, options });
    const { response, json } = await request(url, options);
    if (response?.ok) {
      setComment('')
      setComments((comments: any) => [...comments, json]);
    }
  };

  return (
    <form
      className={styles.form}
      // onSubmit={handleSubmit}
      onClick={handleSubmit}
    >
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        className={styles.textarea}
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      {error && <Error error={error} />}
    </form>
  );
};

export default PhotoCommentsForm;
