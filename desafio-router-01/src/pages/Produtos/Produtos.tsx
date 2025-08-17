import React, { useEffect, useState } from "react";
import { obterProdutos } from "../../service/produtos.service";
import type { Produto } from "../../types/produto.type";
import "./Produtos.scss";

const Produtos = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      return await obterProdutos();
    };

    setProdutos(fetchProdutos() as unknown as Produto[]);
  }, []);
  return (
    <div className="content">
      {/* {produtos?.map((produto) => (
        <>{produto}</>
      ))} */}
      <div className="produto-card">
        <img
          className="produto-imagem"
          src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook.jpg"
          alt="Notebook"
        />
        <h1 className="produto-titulo">Notebook</h1>
      </div>
      <div className="produto-card">
        <img
          className="produto-imagem"
          src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook.jpg"
          alt="Notebook"
        />
        <h1 className="produto-titulo">Notebook</h1>
      </div>
      <div className="produto-card">
        <img
          className="produto-imagem"
          src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook.jpg"
          alt="Notebook"
        />
        <h1 className="produto-titulo">Notebook</h1>
      </div>
      <div className="produto-card">
        <img
          className="produto-imagem"
          src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook.jpg"
          alt="Notebook"
        />
        <h1 className="produto-titulo">Notebook</h1>
      </div>
      <div className="produto-card">
        <img
          className="produto-imagem"
          src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook.jpg"
          alt="Notebook"
        />
        <h1 className="produto-titulo">Notebook</h1>
      </div>
      <div className="produto-card">
        <img
          className="produto-imagem"
          src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook.jpg"
          alt="Notebook"
        />
        <h1 className="produto-titulo">Notebook</h1>
      </div>
    </div>
  );
};

export default Produtos;
