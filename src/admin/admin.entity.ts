import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AdminEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 32 })
  name: string;

  @Column({ length: 32 })
  password: string;
}
