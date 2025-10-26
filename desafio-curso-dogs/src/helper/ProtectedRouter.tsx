import { useContext, type ReactNode } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }: { children: ReactNode }) => {
  const { login } = useContext<any>(UserContext);

  return login ? children : <Navigate to="/login" />;
};

export default ProtectedRouter;
