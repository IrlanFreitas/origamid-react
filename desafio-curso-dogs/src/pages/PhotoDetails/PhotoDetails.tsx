import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { PHOTO_GET } from "../../services/apiStructure";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
import PhotoContent from "../../components/photoContent/PhotoContent";
import Head from "../../helper/Head";

const PhotoDetails = () => {
  const { id } = useParams();

  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    if (id) {
      const { url, options } = PHOTO_GET(id);
      request(url, options);
    }
  }, [id, request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data?.photo.title} />
        <PhotoContent photoContent={data} single />
      </section>
    );
};

export default PhotoDetails;
