import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateFournisseurDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3, { message: 'Numéro Employe:minLenght' })
  @MaxLength(10, { message: 'Numéro Employe:maxLenght' })
  n_Employe: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3, { message: 'Nom:minLenght' })
  @MaxLength(10, { message: 'Nom:maxLenght' })
  nom: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3, { message: 'Prénom:minLenght' })
  @MaxLength(10, { message: 'Prénom:maxLenght' })
  prenom: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3, { message: 'Fonction:minLenght' })
  @MaxLength(10, { message: 'Fonction:maxLenght' })
  fonction: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3, { message: 'Date embauche:minLenght' })
  @MaxLength(10, { message: 'Date embauche:maxLenght' })
  date_embauche: Date;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3, { message: 'Ville:minLenght' })
  @MaxLength(10, { message: 'Ville:maxLenght' })
  ville: string;

  @ApiProperty()
  @IsNotEmpty()
  photo: string;
}
