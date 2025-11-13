import type { Token } from "../types/Token";

export const apiUrl = import.meta.env.VITE_API_URL;

const generateToken = async (
  username: string,
  password: string
): Promise<Token> => {
  try {
    const result = await fetch(apiUrl + "/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    return await result.json();
  } catch (error: any) {
    console.log(`Erro ao gerar token: ${error.message}`);

    throw Error(error.message);
  }
};

const getUser = async (token: string): Promise<Response> => {
  try {
    const result = await fetch(apiUrl + "/api/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return result;
  } catch (error: any) {
    console.log(`Erro ao buscar o usuário: ${error.message}`);

    throw Error(error.message);
  }
};

const validateToken = async (token: string): Promise<Response> => {
  try {
    // /api/user || "/jwt-auth/v1/token"
    const result = await fetch(apiUrl + "/api/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return result;
  } catch (error: any) {
    console.log(`Erro ao gerar token: ${error.message}`);

    throw Error(error.message);
  }
};

const createUser = async (
  username: string,
  email: string,
  password: string
): Promise<Response> => {
  try {
    const result = await fetch(apiUrl + "/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    return result;
  } catch (error: any) {
    console.log(`Erro ao criar usuário: ${error.message}`);

    throw Error(error.message);
  }
};

const postPhoto = async (token: string, formData: FormData) => {
  const result = await fetch(apiUrl + "/api/photo", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
};

export { validateToken, generateToken, getUser, createUser };
