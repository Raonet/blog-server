import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 32 })
  title: string;

  @Column({ length: 400 })
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

  @Column({ length: 32 })
  commentId: string;
}
