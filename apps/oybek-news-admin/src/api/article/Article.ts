import { Category } from "../category/Category";
import { Comment } from "../comment/Comment";
import { Author } from "../author/Author";

export type Article = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  publishedAt: Date | null;
  category?: Category | null;
  comments?: Array<Comment>;
  author?: Author | null;
};
