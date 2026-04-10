import { useContext, useState } from "react";
import type { Comment } from "../../types/Comment";
import { UserContext } from "../../contexts/UserContext";
import PhotoCommentsForm from "../photoCommentsForm/PhotoCommentsForm";
import styles from "./PhotoComments.module.scss";

const PhotoComments = ({
  id,
  comments: photoComments,
}: {
  id: number;
  comments: Comment[];
}) => {
  const [comments, setComments] = useState(() => photoComments);
  const { login } = useContext(UserContext);

  return (
    <>
      <ul className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <strong>{comment.comment_author} :</strong>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={id} setComments={setComments}/>}
    </>
  );
};

export default PhotoComments;
