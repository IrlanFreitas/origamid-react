import React, { useEffect, useState } from "react";
import { obterProdutos } from "../../service/produtos.service";
import type { Produto } from "../../types/produto.type";
import "./Produtos.scss";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";

const Produtos = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        setProdutos(await obterProdutos());

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err?.message);
      } finally {
        setLoading(false);
      }
    };

    setTimeout(async () => {
      fetchProdutos();
    }, 1500);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (event: any, produtoId: string) => {
    event.preventDefault();
    navigate(`/produto/${produtoId}`);
  };

  return (
    <>
      {loading && (
        <>
          <Loading />
        </>
      )}
      {error && <>Criar uma error page</>}
      <div className="content">
        {!loading &&
          produtos?.map((produto) => (
            <div
              className="produto-card"
              onClick={(event) => handleClick(event, produto.id)}
            >
              <div className="produto-container-imagem">
                <img
                  className="produto-imagem"
                  src={produto?.fotos[0].src}
                  alt="Notebook"
                />
              </div>
              <h1 className="produto-titulo">{produto?.nome}</h1>
            </div>
          ))}
      </div>
    </>
  );
};

export default Produtos;
