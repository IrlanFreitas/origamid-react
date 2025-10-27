import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import FeedIcon from "../../assets/feed.svg?react";
import AdicionarIcon from "../../assets/adicionar.svg?react";
import StatsIcon from "../../assets/estatisticas.svg?react";
import SairIcon from "../../assets/sair.svg?react";

import styles from "./UserHeaderNav.module.scss";

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext<any>(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <FeedIcon />
        {mobile && "Minhas fotos"}
      </NavLink>
      <NavLink to="/conta/stats">
        <StatsIcon />
        {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to="/conta/postar">
        <AdicionarIcon />
        {mobile && "Adicionar foto"}
      </NavLink>
      <button onClick={userLogout}>
        <SairIcon />
        {mobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
