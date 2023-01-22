import {ApiProperty} from "@nestjs/swagger";
import {Column} from "typeorm";
import {IsNotEmpty, MaxLength, MinLength} from "class-validator";

export class CreateCategoryDto {
    @ApiProperty()
    @IsNotEmpty()
    @MinLength(3,{message:'Code Categorie.minLength'})
    @MaxLength(10,{message:'Code Categorie.maxLength'})

    code_categorie: string;

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(3,{message:'Code Categorie.minLength'})
    @MaxLength(20,{message:'Code Categorie.maxLength'})
    nomCategorie: string;

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(3,{message:'Code Categorie.minLength'})
    @MaxLength(255,{message:'Code Categorie.maxLength'})
    description: string;
}
