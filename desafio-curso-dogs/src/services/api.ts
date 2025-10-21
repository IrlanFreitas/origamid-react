const apiUrl = import.meta.env.VITE_API_URL;

interface Token {
  token: string;
  user_display_name: string;
  user_email: string;
  user_nicename: string;
}

interface User {
  email: string;
  id: number;
  nome: string;
  username: string;
}

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
    const result = await fetch(apiUrl + "/jwt-auth/v1/token/validate", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    return result;
  } catch (error: any) {
    console.log(`Erro ao gerar token: ${error.message}`);

    throw Error(error.message);
  }
};

export { validateToken, generateToken, getUser };
