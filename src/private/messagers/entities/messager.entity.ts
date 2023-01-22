import { IsPhoneNumber } from 'class-validator';
import { Generique } from './../../../communs/generiques/generique';
import { Column, Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
@Entity({
  name: 'messagers',
})
export class Messager extends Generique {
  @ApiProperty()
  @Column({
    unique: true,
    length: 10,
  })
  N_Messager: string;

  @ApiProperty()
  @Column({
    unique: true,
    length: 50,
  })
  nomMessage: string;

  @ApiProperty()
  @Column({
    unique: true,
  })
  @IsPhoneNumber()
  telephone: string;
}
