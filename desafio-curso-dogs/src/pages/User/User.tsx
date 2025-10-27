import UserHeader from "../../components/userHeader/UserHeader";
import { Route, Routes } from "react-router-dom";
import Feed from "../../components/feed/Feed";
import PhotoPost from "../../components/photoPost/PhotoPost";
import Stats from "../../components/Stats/Stats";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/postar" element={<PhotoPost />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </section>
  );
};

export default User;
