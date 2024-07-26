import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentCreateNestedManyWithoutArticlesInput } from "./CommentCreateNestedManyWithoutArticlesInput";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type ArticleCreateInput = {
  title?: string | null;
  content?: string | null;
  publishedAt?: Date | null;
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentCreateNestedManyWithoutArticlesInput;
  author?: AuthorWhereUniqueInput | null;
};
