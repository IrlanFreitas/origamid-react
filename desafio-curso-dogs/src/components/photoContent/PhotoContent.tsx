import type { PhotoWithComments } from "../../types/PhotoWithComments";
import styles from "./PhotoContent.module.scss";
import FecharIcon from "../../assets/fechar.svg?react";
import { Link } from "react-router-dom";
import PhotoComments from "../photoComments/PhotoComments";

const PhotoContent = ({
  photoContent,
  closeModal,
}: {
  photoContent: PhotoWithComments;
  closeModal: any;
}) => {
  return (
    <div className={styles.photo}>
      <div className={styles.imagem}>
        <img src={photoContent?.photo.src} alt={photoContent?.photo.title} />
      </div>
      <div className={styles.details}>
        <p className={styles.author}>
          <Link to={`/perfil/${photoContent.photo.author}`}>
            @{photoContent.photo.author}
          </Link>
          <span className={styles.views}>{photoContent.photo.acessos}</span>
        </p>
        <h1 className="title">
          <Link to={`/foto/${photoContent.photo.id}`}>
            {photoContent.photo.title}
          </Link>
        </h1>
        <ul className={styles.attributes}>
          <li>{photoContent?.photo.peso} kg</li>
          <li>{photoContent?.photo.idade} anos</li>
        </ul>

        {/* <button
          onClick={closeModal}
          style={{ cursor: "pointer", border: "none" }}
        >
          <FecharIcon style={{ width: 40, height: 40 }} />
        </button> */}
      </div>
      <PhotoComments
        id={photoContent?.photo.id}
        comments={photoContent.comments}
      />
    </div>
  );
};

export default PhotoContent;
