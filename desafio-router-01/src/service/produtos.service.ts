import type { Produto } from "../types/produto.type";

export const obterProdutos = async (): Promise<Produto[]> => {
  const response = await fetch(
    "https://ranekapi.origamid.dev/json/api/produto"
  );

  const produtos = (await response.json()) as Produto[];

  return produtos;
};

export const obterDetalheProduto = async (
  tipoProduto: string
): Promise<Produto> => {
  const response = await fetch(
    `https://ranekapi.origamid.dev/json/api/produto/${tipoProduto}`
  );

  return (await response.json()) as Produto;
};
