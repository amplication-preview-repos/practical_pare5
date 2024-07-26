/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { CommentCreateNestedManyWithoutAuthorsInput } from "./CommentCreateNestedManyWithoutAuthorsInput";
import { Type } from "class-transformer";
import { ArticleCreateNestedManyWithoutAuthorsInput } from "./ArticleCreateNestedManyWithoutAuthorsInput";

@InputType()
class AuthorCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => CommentCreateNestedManyWithoutAuthorsInput,
  })
  @ValidateNested()
  @Type(() => CommentCreateNestedManyWithoutAuthorsInput)
  @IsOptional()
  @Field(() => CommentCreateNestedManyWithoutAuthorsInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutAuthorsInput;

  @ApiProperty({
    required: false,
    type: () => ArticleCreateNestedManyWithoutAuthorsInput,
  })
  @ValidateNested()
  @Type(() => ArticleCreateNestedManyWithoutAuthorsInput)
  @IsOptional()
  @Field(() => ArticleCreateNestedManyWithoutAuthorsInput, {
    nullable: true,
  })
  articles?: ArticleCreateNestedManyWithoutAuthorsInput;
}

export { AuthorCreateInput as AuthorCreateInput };
