import { useState } from "react";
import styles from "./ImageWithSkeleton.module.scss";

const ImageWithSkeleton = ({ alt, ...props }: any) => {
  const [skeleton, setSkeleton] = useState(true);

  const handleLoad = ({ target }: any) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton} />}
      <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
    </div>
  );
};

export default ImageWithSkeleton;
