import { CommentCreateNestedManyWithoutAuthorsInput } from "./CommentCreateNestedManyWithoutAuthorsInput";
import { ArticleCreateNestedManyWithoutAuthorsInput } from "./ArticleCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  comments?: CommentCreateNestedManyWithoutAuthorsInput;
  articles?: ArticleCreateNestedManyWithoutAuthorsInput;
};
