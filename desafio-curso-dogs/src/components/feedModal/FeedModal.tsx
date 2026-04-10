import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./FeedModal.module.scss";
import { PHOTO_GET } from "../../services/apiStructure";
import type { Photo } from "../../types/Photo";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import PhotoContent from "../photoContent/PhotoContent";

const FeedModal = ({
  photo,
  closeModal,
}: {
  photo: Photo;
  closeModal: any;
}) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = PHOTO_GET(photo.id);
      await request(url, options);
    };

    fetchPhotos();
  }, [request]);

  const handleOutsideClick = (event: any) => {
    event.preventDefault()
    if(event.target === event.currentTarget) {
      closeModal()
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && (
        <>
          <PhotoContent photoContent={data} closeModal={closeModal} />
        </>
      )}
    </div>
  );
};

export default FeedModal;
