import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { text } from 'express';

@Entity()
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 32 })
  title: string;

  @Column(text)
  content: string;

  @Column({ length: 32 })
  createTime: string;

  @Column({ length: 32 })
  updateTime: string;

  @Column({ length: 32 })
  stepId: string;

  @Column()
  stepnum: number;

  @Column({ length: 32 })
  likeId: string;

  @Column()
  likenum: number;

  @Column({ length: 400 })
  comment: string;
}
