import type { Photo } from "../../types/Photo";
import styles from "./FeedPhotosItem.module.scss";

const FeedPhotosItem = ({
  photo,
  setSelectedPhoto,
}: {
  photo: Photo;
  setSelectedPhoto: any;
}) => {
  const handleClick = (event: any) => {
    event.preventDefault();
    setSelectedPhoto(photo);
  };

  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={photo?.src} alt={photo.title} />
      <span className={styles.views}>{photo?.acessos}</span>
      {/* <p>{photo?.title}</p>
      <p>{photo?.idade}</p>
      <p>{photo?.peso}</p>
      <p>{photo?.date}</p> */}
    </li>
  );
};

export default FeedPhotosItem;
