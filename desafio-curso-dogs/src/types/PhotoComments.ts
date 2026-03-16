import type { Photo } from "./Photo";

export interface PhotoComments {
  photo: Photo & { total_comments: number };
  comments: Comment[];
}
