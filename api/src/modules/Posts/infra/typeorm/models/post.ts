import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import Comment from './comment'
import Like from './like'

@Entity('posts')
export default class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  user_id: string;

  @Column('uuid')
  qrcode_id: string;

  @OneToMany(type => Comment, comment => comment.post)
  comments?: Comment[] | [];

  @OneToMany(type => Like, like => like.post)
  likes?: Like[] | [];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

// Related services
// [] -> Create Posts
// [] -> Get Post
// [] -> Delete Post
// [] -> Like post
// [] -> Comment on post