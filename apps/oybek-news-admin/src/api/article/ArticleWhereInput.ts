import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type ArticleWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  publishedAt?: DateTimeNullableFilter;
  category?: CategoryWhereUniqueInput;
  comments?: CommentListRelationFilter;
  author?: AuthorWhereUniqueInput;
};
