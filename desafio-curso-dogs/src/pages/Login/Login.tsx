import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "../../components/loginForm/LoginForm";
import LoginReset from "../../components/loginReset/LoginReset";
import LoginRegister from "../../components/loginRegister/LoginRegister";
import LoginPasswordLost from "../../components/loginPasswordLost/LoginPasswordLost";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import styles from "./Login.module.scss";

const Login = () => {
  const { login } = useContext<any>(UserContext);

  if (login) return <Navigate to="/conta" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginRegister />} />
          <Route path="reset" element={<LoginReset />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
