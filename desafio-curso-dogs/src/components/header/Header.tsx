import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className="container">
      <NavLink to='/'>Home</NavLink>{" "}
      <NavLink to='/login'>Login / Criar</NavLink>
    </header>
  );
};

export default Header;
