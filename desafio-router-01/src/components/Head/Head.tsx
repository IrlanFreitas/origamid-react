import { useEffect } from "react";

const Head = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  useEffect(() => {
    document.title = title;
    document
      ?.querySelector('meta[name="descriptio"]')
      ?.setAttribute("content", description);
  }, [title, description]);

  return <></>;
};

export default Head;
