import type { PhotoWithComments } from "../../types/PhotoWithComments";
import styles from "./PhotoContent.module.scss";
import { Link } from "react-router-dom";
import PhotoComments from "../photoComments/PhotoComments";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import PhotoDelete from "../photoDelete/PhotoDelete";
import ImageWithSkeleton from "../imageWithSkeleton/ImageWithSkeleton";

const PhotoContent = ({
  photoContent,
  closeModal,
}: {
  photoContent: PhotoWithComments;
  closeModal: any;
}) => {
  const user = useContext(UserContext);

  return (
    <div className={styles.photo}>
      <div className={styles.imagem}>
        <ImageWithSkeleton
          alt={photoContent?.photo.title}
          src={photoContent?.photo.src}
          title={photoContent?.photo.title}
        />
        <img src={photoContent?.photo.src} alt={photoContent?.photo.title} />
      </div>
      <div className={styles.details}>
        <p className={styles.author}>
          {user?.data && user?.data.username === photoContent.photo.author ? (
            <PhotoDelete id={photoContent.photo.id} />
          ) : (
            <Link to={`/perfil/${photoContent.photo.author}`}>
              @{photoContent.photo.author}
            </Link>
          )}

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
      </div>
      <PhotoComments
        id={photoContent?.photo.id}
        comments={photoContent.comments}
      />
    </div>
  );
};

export default PhotoContent;
