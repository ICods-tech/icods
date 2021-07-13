import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, IsNull } from 'typeorm'
import User from '../../../../Users/infra/typeorm/models/user'
import Post from './post'

@Entity('comments')
export default class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(type => User, user => user.likes, {
    onDelete: 'CASCADE'
  })
  @JoinColumn()
  user?: User;

  @Column('uuid')
  userId: string;

  @ManyToOne(type => Post, post => post.likes, {
    onDelete: 'CASCADE'
  })
  post: Post;

  @Column()
  content: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
