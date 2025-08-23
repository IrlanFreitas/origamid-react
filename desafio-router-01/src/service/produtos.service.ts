import type { Produto } from "../types/produto.type";

export const obterProdutos = async (): Promise<Produto[]> => {
  try {
    const response = await fetch(
      "https://ranekapi.origamid.dev/json/api/produto"
    );
    const data: Produto[] = await response.json();

    return data;
  } catch (error) {
    console.log("Error fetching produtos: ", error);
    throw error;
  }
};

export const obterDetalheProduto = async (
  tipoProduto: string
): Promise<Produto> => {
  try {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${tipoProduto}`
    );

    return (await response.json()) as Produto;
  } catch (error) {
    console.log("Error fetching produtos: ", error);
    throw error;
  }
};
