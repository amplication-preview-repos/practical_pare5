import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  article?: ArticleWhereUniqueInput | null;
  author?: AuthorWhereUniqueInput | null;
};
