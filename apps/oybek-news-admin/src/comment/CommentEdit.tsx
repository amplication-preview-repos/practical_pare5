import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ArticleTitle } from "../article/ArticleTitle";
import { AuthorTitle } from "../author/AuthorTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="article.id" reference="Article" label="article">
          <SelectInput optionText={ArticleTitle} />
        </ReferenceInput>
        <ReferenceInput source="author.id" reference="Author" label="author">
          <SelectInput optionText={AuthorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
