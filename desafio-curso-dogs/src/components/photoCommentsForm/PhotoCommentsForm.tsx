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
  const [comment, setComment] = useState<string>("");

  const { request, error } = useFetch();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (comment !== null || comment !== "") {
      console.log("click");
      console.log(comment);
      const { url, options } = COMMENT_POST(id, { comment });
      console.log({ url, options });
      const { response, json } = await request(url, options);
      if (response?.ok) {
        setComment("");
        setComments((comments: any) => [...comments, json]);
      }
    }
  };

  return (
    <form
      className={styles.form}
      // onSubmit={handleSubmit}
      // onChange={handleSubmit}
      onClick={handleSubmit}
    >
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        className={styles.textarea}
        value={comment}
        onChange={({ target }) => {
          if (target.value !== "") setComment(target.value);
        }}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      {error && <Error error={error} />}
    </form>
  );
};

export default PhotoCommentsForm;
