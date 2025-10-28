import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import FeedIcon from "../../assets/feed.svg?react";
import AdicionarIcon from "../../assets/adicionar.svg?react";
import StatsIcon from "../../assets/estatisticas.svg?react";
import SairIcon from "../../assets/sair.svg?react";

import styles from "./UserHeaderNav.module.scss";
import useMedia from "../../hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = useContext<any>(UserContext);
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobile = useMedia("(max-width: 40rem)");

  const {pathname} = useLocation()

  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])
  

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav className={`${!mobile ? styles.nav : styles.navMobile} ${mobileMenu && styles.navMobileActive}`}>
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
    </>
  );
};

export default UserHeaderNav;
