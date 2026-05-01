import { useEffect } from "react";

const Head = (props: any) => {
  
  useEffect(() => {
    document.title = props.title + ' | Dogs';
    document.querySelector("meta[name='description']")?.setAttribute('content', props.description || '')
  }, [props]);

  return <></>;
};

export default Head;
