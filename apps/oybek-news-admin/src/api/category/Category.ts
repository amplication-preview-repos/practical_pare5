import { Article } from "../article/Article";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  articles?: Array<Article>;
};
