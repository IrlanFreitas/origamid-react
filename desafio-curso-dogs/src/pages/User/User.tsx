import UserHeader from "../../components/userHeader/UserHeader";
import { Route, Routes } from "react-router-dom";
import Feed from "../../components/feed/Feed";
import Stats from "../../components/Stats/Stats";
import PhotoPost from "../PhotoPost/PhotoPost";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const User = () => {

  const { data } = useContext(UserContext)

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id}/>} />
        <Route path="/postar" element={<PhotoPost />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </section>
  );
};

export default User;
