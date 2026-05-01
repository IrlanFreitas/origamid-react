import UserHeader from "../../components/userHeader/UserHeader";
import { Route, Routes } from "react-router-dom";
import Feed from "../../components/feed/Feed";
import Stats from "../../components/stats/Stats";
import PhotoPost from "../PhotoPost/PhotoPost";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import NotFound from "../../components/notFound/NotFound";
import Head from "../../helper/Head";

const User = () => {

  const { data } = useContext(UserContext)

  return (
    <section className="container">
      {/* <Head title={data?.nome}/> */}
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data?.id}/>} />
        <Route path="/postar" element={<PhotoPost />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
