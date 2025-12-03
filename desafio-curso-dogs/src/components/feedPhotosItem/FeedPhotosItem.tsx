import type { Photo } from "../../types/Photo";
import styles from "./FeedPhotosItem.module.scss";

const FeedPhotosItem = ({ photo }: { photo: Photo }) => {
  return (
    <li className={styles.photo}>
      <img src={photo?.src} alt={photo.title} />
      <span>{photo?.acessos}</span>
      {/* <p>{photo?.title}</p>
      <p>{photo?.idade}</p>
      <p>{photo?.peso}</p>
      <p>{photo?.date}</p> */}
    </li>
  )
}

export default FeedPhotosItem
