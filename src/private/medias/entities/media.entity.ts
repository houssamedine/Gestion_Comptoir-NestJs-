import { Employe } from './../../employes/entities/employe.entity';
import { Generique } from './../../../communs/generiques/generique';
import { Column, Entity, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'medias' })
export class Media extends Generique {
  @ApiProperty()
  @Column()
  namephoto: string;

  @ApiProperty()
  @Column()
  photo: string;

  @ApiProperty({ type: () => Employe })
  @ManyToOne(() => Employe, (media) => media.medias, {
    cascade: ['insert'],
  })
  employe: Employe;
}
