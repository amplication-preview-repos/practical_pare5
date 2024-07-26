import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  article?: ArticleWhereUniqueInput | null;
  author?: AuthorWhereUniqueInput | null;
};
