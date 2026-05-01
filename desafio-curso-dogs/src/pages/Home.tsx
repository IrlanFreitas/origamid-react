import { useContext } from "react";
import Feed from "../components/feed/Feed";
import { UserContext } from "../contexts/UserContext";
import Head from "../helper/Head";

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <section className="container mainContainer">
      <Head title='Fotos' description='Home do site dogs, com o feed de fotos.' />
      <Feed user={user} />
    </section>
  );
};

export default Home;
