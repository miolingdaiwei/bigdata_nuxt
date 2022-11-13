//    posts/posts.entity.ts
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('posts')
export class PostsEntity {
  @PrimaryGeneratedColumn()
  id: number; // 标记为主列，值自动生成

  @Column({ length: 50 })
  title: string;

  @Column({ length: 20, default: 'ss' })
  author: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ default: '' })
  thumb_url: string;

  @Column('tinyint')
  type: number;

  @CreateDateColumn()
  create_time: Date;

  @UpdateDateColumn()
  update_time: Date;
}
