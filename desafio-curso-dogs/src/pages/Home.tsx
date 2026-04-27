import { useContext } from "react";
import Feed from "../components/feed/Feed";
import { UserContext } from "../contexts/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <section className="container mainContainer">
      <Feed user={user} />
    </section>
  );
};

export default Home;
