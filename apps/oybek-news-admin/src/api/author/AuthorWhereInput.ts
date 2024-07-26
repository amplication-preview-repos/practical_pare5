import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { ArticleListRelationFilter } from "../article/ArticleListRelationFilter";

export type AuthorWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  articles?: ArticleListRelationFilter;
};
