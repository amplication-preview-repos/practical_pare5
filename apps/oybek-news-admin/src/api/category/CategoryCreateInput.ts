import { ArticleCreateNestedManyWithoutCategoriesInput } from "./ArticleCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  description?: string | null;
  articles?: ArticleCreateNestedManyWithoutCategoriesInput;
};
