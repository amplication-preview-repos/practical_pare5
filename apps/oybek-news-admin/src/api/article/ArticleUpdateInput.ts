import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentUpdateManyWithoutArticlesInput } from "./CommentUpdateManyWithoutArticlesInput";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type ArticleUpdateInput = {
  title?: string | null;
  content?: string | null;
  publishedAt?: Date | null;
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutArticlesInput;
  author?: AuthorWhereUniqueInput | null;
};
