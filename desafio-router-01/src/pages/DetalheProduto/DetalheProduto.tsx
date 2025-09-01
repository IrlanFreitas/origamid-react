import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Produto } from "../../types/produto.type";
import { obterDetalheProduto } from "../../service/produtos.service";
import Loading from "../../components/Loading/Loading";
import "./DetalheProduto.scss";

const DetalheProduto = () => {
  const [produto, setProduto] = useState<Produto>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();

  useEffect(() => {
    const fetchDetalheProduto = async () => {
      try {
        setProduto(await obterDetalheProduto(params?.id || ""));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err?.message);
      } finally {
        setLoading(false);
      }
    };

    setTimeout(async () => {
      fetchDetalheProduto();
    }, 1500);
  }, []);

  return (
    <>
      {loading && (
        <>
          <Loading />
        </>
      )}
      {error && <>Criar uma tela de error</>}
      {!loading && (
        <section className="detalhe-produto animeLeft">
          <div className="detalhe-produto-fotos">
            {produto?.fotos?.map((foto) => {
              return (
                <>
                  <div className="detalhe-produto-container-imagem">
                    <img
                      className="detalhe-produto-imagem"
                      src={foto.src}
                      alt={foto.titulo}
                    />
                  </div>
                </>
              );
            })}
          </div>
          <div className="produto-info">
            <h1 className="produto-nome">{produto?.nome}</h1>
            <p>
              <span className="produto-preco">R$ {produto?.preco}</span>
            </p>
            <p className="produto-descricao">{produto?.descricao}</p>
          </div>
        </section>
      )}
    </>
  );
};

export default DetalheProduto;
