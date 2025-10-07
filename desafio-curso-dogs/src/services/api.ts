const apiUrl = import.meta.env.VITE_API_URL;

export const validateToken = async (
  username: string,
  password: string
): Promise<any> => {
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
    console.log(`Erro ao validar o token: ${error.message}`);

    throw Error(error.message);
  }
};

export const getUser = async (token: string) => {
  try {
    const result = await fetch(apiUrl + "/api/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await result.json();
  } catch (error: any) {
    console.log(`Erro ao buscar o usuário: ${error.message}`);

    throw Error(error.message);
  }
};
