import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Dog from "../../assets/dogs.svg?react";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <NavLink
          className={styles.logo}
          to="/"
          style={{ marginRight: 20 }}
          aria-label="Dogs - Home"
        >
          {/* <img src={Dog} alt="Icone de cachorro" /> */}
          <Dog />
        </NavLink>
        {"   "}
        <NavLink to="/login" className={styles.login}>
          Login / Criar
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
