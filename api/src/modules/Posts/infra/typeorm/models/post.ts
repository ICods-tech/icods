import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, IsNull } from 'typeorm'
import QRCode from '../../../../QRCodes/infra/typeorm/models/QRCode'
import Comment from './comment'
import { Exclude } from 'class-transformer'

@Entity('posts')
export default class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  user_id: string;

  @Column('uuid')
  qrcode_id: string;

  @OneToMany(type => Comment, comment => comment.post)
  comments: Comment[];

  @Column()
  likes: number;

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