import { Media } from '../../medias/entities/media.entity';
import { Generique } from '../../../communs/generiques/generique';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany } from 'typeorm';
import { Transform } from 'class-transformer';

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
  @Transform(() => new Date())
  @Column()
  date_embauche: Date;

  @ApiProperty()
  @Column({
    length: 10,
  })
  ville: string;

  @ApiProperty({ type: () => Media })
  @OneToMany(() => Media, (media) => media.employe, {
    cascade: ['insert'],
  })
  medias: Media[];
}
