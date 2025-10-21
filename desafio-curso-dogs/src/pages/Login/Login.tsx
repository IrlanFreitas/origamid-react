import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "../../components/loginForm/LoginForm";
import LoginReset from "../../components/loginReset/LoginReset";
import LoginRegister from "../../components/loginRegister/LoginRegister";
import LoginPasswordLost from "../../components/loginPasswordLost/LoginPasswordLost";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const Login = () => {
  const { login } = useContext<any>(UserContext);

  if (login) return <Navigate to="/conta" />;

  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="criar" element={<LoginRegister />} />
      <Route path="reset" element={<LoginReset />} />
      <Route path="perdeu" element={<LoginPasswordLost />} />
    </Routes>
  );
};

export default Login;
