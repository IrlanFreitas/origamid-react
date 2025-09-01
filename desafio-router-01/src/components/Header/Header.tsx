import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <nav className={styles.botoes}>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.botaoNavegarAtivo : styles.botaoNavegar
        }
        to="/"
      >
        Produtos
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.botaoNavegarAtivo : styles.botaoNavegar
        }
        to="contato"
      >
        Contato
      </NavLink>
    </nav>
  );
};

export default Header;
