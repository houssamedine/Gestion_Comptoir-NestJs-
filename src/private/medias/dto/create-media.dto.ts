import { IsNotEmpty, IsNotEmptyObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Generique } from './../../../communs/generiques/generique';
import { ManyToOne } from 'typeorm';
import { Employe } from 'src/private/employes/entities/employe.entity';
export class CreateMediaDto extends Generique {
  @ApiProperty()
  @IsNotEmpty()
  namephoto: string;

  @ApiProperty()
  @IsNotEmpty()
  photo: string;

  @ApiProperty({ type: () => Employe })
  @IsNotEmptyObject()
  employe: Employe;
}
