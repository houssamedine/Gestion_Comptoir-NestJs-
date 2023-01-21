import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsPhoneNumber,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateClientDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3, { message: 'Code Client.minLength' })
  @MaxLength(30, { message: 'Code Client.maxLength' })
  code_client: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3, { message: 'Société.minLength' })
  @MaxLength(30, { message: 'Société.maxLength' })
  societe: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3, { message: 'Fonction.minLength' })
  @MaxLength(30, { message: 'Fonction.maxLength' })
  fonction: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3, { message: 'Adresse.minLength' })
  @MaxLength(30, { message: 'Adresse.maxLength' })
  adresse: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3, { message: 'Ville.minLength' })
  @MaxLength(30, { message: 'Ville.maxLength' })
  ville: string;

  @ApiProperty()
  @IsPhoneNumber()
  @MinLength(3, { message: 'Téléphone.minLength' })
  @MaxLength(30, { message: 'Téléphone.maxLength' })
  @IsNotEmpty()
  telephone: string;
}
