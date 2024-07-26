import { ArticleUpdateManyWithoutCategoriesInput } from "./ArticleUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  description?: string | null;
  articles?: ArticleUpdateManyWithoutCategoriesInput;
};
