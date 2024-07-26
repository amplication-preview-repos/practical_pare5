import { Article } from "../article/Article";
import { Author } from "../author/Author";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  article?: Article | null;
  author?: Author | null;
};
