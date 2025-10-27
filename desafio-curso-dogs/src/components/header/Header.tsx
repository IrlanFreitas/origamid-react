import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Dog from "../../assets/dogs.svg?react";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const Header = () => {
  const { data, userLogout } = useContext<any>(UserContext);

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
        {data ? (
          <>
            <NavLink to="/conta" className={styles.login}>
              {data?.nome}
            </NavLink>
            {/* <button onClick={() => userLogout()}>Sair</button> */}
          </>
        ) : (
          <NavLink to="/login" className={styles.login}>
            Login / Criar
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
