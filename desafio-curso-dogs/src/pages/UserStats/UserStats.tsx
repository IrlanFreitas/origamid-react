import { useEffect } from "react";
import Head from "../../helper/Head";
import useFetch from "../../hooks/useFetch";
import { GET_STATS } from "../../services/apiStructure";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import UserGraphs from "../../components/userGraphs/UserGraphs";

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const getData = async () => {
      const { url, options } = GET_STATS(
        window?.localStorage?.getItem("token") || "",
      );
      await request(url, options);
    };

    getData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) {
    return (
      <section>
        <Head title="Estatísticas" />
        <UserGraphs data={data} />
      </section>
    );
  } else {
    return null;
  }
};

export default UserStats;
