import React from "react";
import {
  Outlet,
  useLocation,
  useParams,
  useSearchParams,
  NavLink,
} from "react-router-dom";

const Produto = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const location = useLocation();
  console.log(searchParams[1]);
  console.log(location);

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="" end>Descrição</NavLink> {" "} | {" "}
        <NavLink to="avaliacao">Avaliação</NavLink> {" "} | {" "}
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Produto;
