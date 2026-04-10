import type { Comment } from "./Comment";
import type { Photo } from "./Photo";

export interface PhotoWithComments {
  photo: Photo & { total_comments: number };
  comments: Comment[];
}
