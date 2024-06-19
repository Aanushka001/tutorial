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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { ProductUpdateManyWithoutCompaniesInput } from "./ProductUpdateManyWithoutCompaniesInput";
import { Type } from "class-transformer";

@InputType()
class CompanyUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProductUpdateManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => ProductUpdateManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => ProductUpdateManyWithoutCompaniesInput, {
    nullable: true,
  })
  products?: ProductUpdateManyWithoutCompaniesInput;
}

export { CompanyUpdateInput as CompanyUpdateInput };
