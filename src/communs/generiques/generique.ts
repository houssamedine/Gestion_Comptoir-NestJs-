import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
export class Generique {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    update: false,
  })
  create_at: Date;
  @UpdateDateColumn()
  update_at: Date;

  @DeleteDateColumn()
  delete_at: Date;

  @CreateDateColumn()
  created_by: Date;

  @UpdateDateColumn()
  updated_by: Date;
}
