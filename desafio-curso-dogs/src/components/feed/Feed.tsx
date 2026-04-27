import { useEffect, useState } from "react";
import FeedModal from "../feedModal/FeedModal";
import FeedPhotos from "../feedPhotos/FeedPhotos";
import type { Photo } from "../../types/Photo";

const Feed = ({ user }: { user: any }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [pages, setPages] = useState<number[]>([1]);
  const [infinity, setInfinity] = useState<boolean>(true);

  useEffect(() => {
    const handleEsc = (event: any) => {
      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    const infinityScroll = () => {
      if (infinity) {
        let wait = false;

        // Quanto de scroll o usuário fez
        const scroll = window.scrollY;

        // Tamanho da página
        const height = document.body.offsetHeight - window.innerHeight;

        console.log(scroll);
        console.log(height);
        // Quando scroll está perto do final da página
        if (scroll > height * 0.75 && !wait) {
          console.log(true);
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          // Aguardar um pouco antes de fazer outro fetch
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    };

    window.addEventListener("wheel", infinityScroll);
    window.addEventListener("scroll", infinityScroll);

    return () => {
      window.removeEventListener("wheel", infinityScroll);
      window.removeEventListener("scroll", infinityScroll);
    };
  }, [infinity]);

  return (
    <>
      {pages?.map((page) => (
        <FeedPhotos
          page={page}
          user={user}
          setSelectedPhoto={setSelectedPhoto}
          setInfinity={setInfinity}
        />
      ))}
      {selectedPhoto && (
        <FeedModal
          photo={selectedPhoto}
          closeModal={() => setSelectedPhoto(null)}
        />
      )}
    </>
  );
};

export default Feed;
