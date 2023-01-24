import { ApiProperty } from '@nestjs/swagger';
import { Generique } from './../../../communs/generiques/generique';
import { Column, Entity } from 'typeorm';

@Entity({
  name: 'fournisseurs',
})
export class Fournisseur extends Generique {
  @ApiProperty()
  @Column({
    length: 10,
  })
  n_Employe: string;

  @ApiProperty()
  @Column({
    length: 10,
  })
  nom: string;

  @ApiProperty()
  @Column({
    length: 10,
  })
  prenom: string;

  @ApiProperty()
  @Column({
    length: 10,
  })
  fonction: string;

  @ApiProperty()
  @Column()
  date_embauche: Date;

  @ApiProperty()
  @Column({
    length: 10,
  })
  ville: string;

  @ApiProperty()
  @Column({
    length: 30,
  })
  photo: string;
}
