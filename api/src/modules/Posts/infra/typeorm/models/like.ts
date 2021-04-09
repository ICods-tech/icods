import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn, ManyToOne } from 'typeorm'
import User from '../../../../Users/infra/typeorm/models/user'
import Post from '../../../../Posts/infra/typeorm/models/post'

@Entity('likes')
export default class Like {
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}