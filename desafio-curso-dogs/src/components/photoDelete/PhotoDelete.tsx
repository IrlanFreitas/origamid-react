import { type MouseEvent } from "react";
import styles from "./PhotoDelete.module.scss";
import useFetch from "../../hooks/useFetch";
import { PHOTO_DELETE } from "../../services/apiStructure";

const PhotoDelete = ({ id }: { id: number }) => {
  const { loading, request } = useFetch();

  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response?.ok) {
        window.location.reload();
      }
    }
  };

  return (
    <>
      {loading ? (
        <button disabled className={styles.delete}>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
