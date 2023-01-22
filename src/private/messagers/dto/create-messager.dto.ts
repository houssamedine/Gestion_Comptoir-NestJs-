import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsPhoneNumber,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateMessagerDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3, { message: 'Numéro de message.minLength' })
  @MaxLength(10, { message: 'Numéro de message.maxLength' })
  N_Messager: string;

  @IsNotEmpty()
  @MinLength(3, { message: 'Nom de message.minLength' })
  @MaxLength(50, { message: 'Nom de message.maxLength' })
  nomMessage: string;

  @IsNotEmpty()
  @MinLength(3, { message: 'Numéro de Téléphone.minLength' })
  @MaxLength(10, { message: 'Numéro de Téléphone.maxLength' })
  @IsPhoneNumber()
  telephone: string;
}
