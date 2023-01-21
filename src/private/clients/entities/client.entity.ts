import { Generique } from './../../../communs/generiques/generique';
import { ApiProperty } from '@nestjs/swagger';
import { IsPhoneNumber } from 'class-validator';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'clients' })
export class Client extends Generique {
  @ApiProperty()
  @Column({
    unique: true,
    length: 20,
  })
  code_client: string;

  @ApiProperty()
  @Column({
    unique: true,
    length: 20,
  })
  societe: string;

  @ApiProperty()
  @Column({
    unique: true,
    length: 20,
  })
  fonction: string;

  @ApiProperty()
  @Column({
    unique: true,
  })
  adresse: string;

  @ApiProperty()
  @Column({
    unique: true,
    length: 10,
  })
  ville: string;

  @ApiProperty()
  @Column({
    unique: true,
  })
  @IsPhoneNumber()
  telephone: string;
}
