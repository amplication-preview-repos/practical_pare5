import { CommentUpdateManyWithoutAuthorsInput } from "./CommentUpdateManyWithoutAuthorsInput";
import { ArticleUpdateManyWithoutAuthorsInput } from "./ArticleUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  comments?: CommentUpdateManyWithoutAuthorsInput;
  articles?: ArticleUpdateManyWithoutAuthorsInput;
};
