import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';
import { Media } from 'src/private/medias/entities/media.entity';
export class CreateEmployeDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(1, { message: 'Numéro Employe:minLenght' })
  @MaxLength(10, { message: 'Numéro Employe:maxLenght' })
  n_Employe: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3, { message: 'Nom:minLenght' })
  @MaxLength(10, { message: 'Nom:maxLenght' })
  nom: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3, { message: 'Prenom:minLenght' })
  @MaxLength(10, { message: 'Prenom:maxLenght' })
  prenom: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3, { message: 'Fonction:minLenght' })
  @MaxLength(10, { message: 'Fonction:maxLenght' })
  fonction: string;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(() => new Date())
  date_embauche: Date;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3, { message: 'Ville:minLenght' })
  @MaxLength(10, { message: 'Ville:maxLenght' })
  ville: string;
}
