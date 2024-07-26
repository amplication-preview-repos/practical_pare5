import { Comment } from "../comment/Comment";
import { Article } from "../article/Article";

export type Author = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  comments?: Array<Comment>;
  articles?: Array<Article>;
};
