import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type CommentWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  article?: ArticleWhereUniqueInput;
  author?: AuthorWhereUniqueInput;
};
