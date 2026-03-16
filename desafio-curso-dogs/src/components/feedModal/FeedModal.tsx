import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./FeedModal.module.scss";
import { PHOTO_GET } from "../../services/apiStructure";
import type { Photo } from "../../types/Photo";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import PhotoComments from "../photoComments/PhotoComments";

const FeedModal = ({ photo }: { photo: Photo }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = PHOTO_GET(photo.id);
      await request(url, options);
    };

    fetchPhotos();
  }, [request]);

  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoComments photoComments={data} />}
    </div>
  );
};

export default FeedModal;
