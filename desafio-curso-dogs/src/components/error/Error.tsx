import { useEffect, useRef } from "react";
import styles from "./Error.module.scss";

const Error = ({ error }: { error: string }) => {
  const divRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (divRef.current) {
      setTimeout(() => {
        const el = divRef.current;
        if (el) {
          el.style.display = "none";
        }
      }, 3000);
    }
  }, [error]);

  if (!error) return null;

  return (
    <>
      {error && (
        <p ref={divRef} className={styles.error}>
          {error}
        </p>
      )}
    </>
  );
};

export default Error;
