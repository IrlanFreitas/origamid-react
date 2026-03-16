import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import FeedPhotosItem from "../feedPhotosItem/FeedPhotosItem";
import { PHOTOS_GET } from "../../services/apiStructure";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import styles from "./FeedPhotos.module.scss";

const FeedPhotos = ({ setSelectedPhoto }: { setSelectedPhoto: any }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = PHOTOS_GET(1, 10, `0`);
      await request(url, options);
    };

    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  return (
    <>
      <ul className={`animeLeft ${styles.feed}`}>
        {data?.map((photo: any) => (
          <FeedPhotosItem
            setSelectedPhoto={setSelectedPhoto}
            key={photo.id}
            photo={photo}
          />
        ))}
      </ul>
    </>
  );
};

export default FeedPhotos;
