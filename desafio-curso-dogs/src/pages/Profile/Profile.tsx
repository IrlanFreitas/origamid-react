import { useParams } from "react-router-dom";
import Feed from "../../components/feed/Feed";
import Head from "../../helper/Head";

const Profile = () => {
  const { user } = useParams();

    return (
      <section className="container mainContainer">
        <Head title={user} />
        <h1 className="title">{user}</h1>
        <Feed user={user} />
      </section>
    );
};

export default Profile;
