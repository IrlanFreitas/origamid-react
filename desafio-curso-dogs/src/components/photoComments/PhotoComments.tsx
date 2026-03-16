import type { PhotoComments as PhotoWithComments } from "../../types/PhotoComments";
import styles from "./PhotoComments.module.scss";

const PhotoComments = ({ photoComments }: { photoComments: PhotoWithComments }) => {
  return (
    <div className={styles.card}>
      <img src={photoComments?.photo.src} alt={photoComments?.photo.title} />
    </div>
  );
};

export default PhotoComments;
