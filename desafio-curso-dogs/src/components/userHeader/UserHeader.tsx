import { useEffect, useState } from "react";
import UserHeaderNav from "../UserHeaderNav/UserHeaderNav";
import styles from "./UserHeader.module.scss";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = useState("Minha Conta");

  const location = useLocation();

  useEffect(() => {
    getTitle();
  }, [location.pathname]);

  const getTitle = () => {
    switch (location.pathname) {
      case "/conta":
        setTitle("Minha Conta");
        break;
      case "/conta/stats":
        setTitle("Estatísticas");
        break;
      case "/conta/postar":
        setTitle("Postagens");
        break;

      default:
        break;
    }
  };

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
