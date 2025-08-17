import { NavLink } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink> | 
      <NavLink to="Login"> Login</NavLink> | 
      <NavLink to="sobre"> Sobre</NavLink> | 
      <NavLink to="contato"> Contato</NavLink>
    </nav>
  );
};
