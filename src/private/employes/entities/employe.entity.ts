import { Generique } from './../../../communs/generiques/generique';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';

@Entity({
  name: 'employes',
})
export class Employe extends Generique {
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
  @Column({})
  date_embauche: Date;

  @ApiProperty()
  @Column({
    length: 10,
  })
  ville: string;

  @ApiProperty()
  @Column({})
  photo: string;

  @ApiProperty()
  @Column({})
  namephoto: string;
}
