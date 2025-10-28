import { useEffect, useState } from "react";

// * "(max-width: 40rem)"
const useMedia = (media: string) => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const changeMatch = () => {
      // TODO - MUITO FODA ISSO AQUI
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    };
    changeMatch()
    window.addEventListener("resize", changeMatch);

    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [media]);

  return match;
};

export default useMedia;
