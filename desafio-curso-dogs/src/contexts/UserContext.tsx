import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import * as service from "../services/api";
import { useNavigate } from "react-router-dom";
import type { User } from "../types/User";
import type { UserContextType } from "../types/UserContext";

export const UserContext = createContext<UserContextType | null>(null);

export const UserStorage = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<User | null>();
  const [login, setLogin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const navigate = useNavigate();

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError("");
          setLoading(true);
          const retorno = await service.validateToken(token);

          if (!retorno.ok) throw new Error("Token inválido");
          const retornoUser = await service.getUser(token);
          const _user = await retornoUser.json();

          setData(_user);
          setLogin(true);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, []);

  const userLogin = async (username: string, password: string) => {
    try {
      setError("");
      setLoading(true);
      const generatedToken = await service.generateToken(username, password);
      window.localStorage.setItem("token", generatedToken.token);

      const response = await service.getUser(generatedToken.token);
      if (!response.ok) throw new Error(`Error ao buscar usuário: ${username}`);
      const user = await response.json();

      setData(user);
      setLogin(true);
      navigate("/conta");
    } catch (error: any) {
      setError(error.message);
      setData(null);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = async () => {
    setData(null);
    setError("");
    setLogin(false);
    window.localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, login, error, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
