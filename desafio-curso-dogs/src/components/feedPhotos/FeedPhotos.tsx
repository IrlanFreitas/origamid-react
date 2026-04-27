import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import FeedPhotosItem from "../feedPhotosItem/FeedPhotosItem";
import { PHOTOS_GET } from "../../services/apiStructure";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import styles from "./FeedPhotos.module.scss";

const FeedPhotos = ({
  setSelectedPhoto,
  page = 1,
  user,
  setInfinity,
}: {
  user: any;
  page: any;
  setSelectedPhoto: any;
  setInfinity: any;
}) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const fetchPhotos = async () => {
      const total = 3;
      const { url, options } = PHOTOS_GET(page, total, user);
      const { response, json} = await request(url, options);
      // Caso o retorno seja menor que a quantidade e dados pedida
      // Cancela o infinity scroll
      if(response?.ok && json.length < total) {
        setInfinity(false)
      }
    };

    fetchPhotos();
  }, [request, user]);

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
