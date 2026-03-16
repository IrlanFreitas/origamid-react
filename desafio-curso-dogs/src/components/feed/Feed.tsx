import { useEffect, useState } from "react";
import FeedModal from "../feedModal/FeedModal";
import FeedPhotos from "../feedPhotos/FeedPhotos";
import type { Photo } from "../../types/Photo";

const Feed = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

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

  return (
    <>
      {selectedPhoto && <FeedModal photo={selectedPhoto} />}
      <FeedPhotos setSelectedPhoto={setSelectedPhoto} />
    </>
  );
};

export default Feed;
