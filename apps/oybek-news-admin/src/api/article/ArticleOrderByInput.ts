import { SortOrder } from "../../util/SortOrder";

export type ArticleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  content?: SortOrder;
  publishedAt?: SortOrder;
  categoryId?: SortOrder;
  authorId?: SortOrder;
};
