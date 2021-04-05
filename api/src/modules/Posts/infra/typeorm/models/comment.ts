import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, IsNull } from 'typeorm'
import QRCode from '../../../../QRCodes/infra/typeorm/models/QRCode'
import User from '../../../../Users/infra/typeorm/models/user'
import Post from './post'

@Entity('comments')
export default class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(type => User)
  @JoinColumn()
  user: User;

  @ManyToOne(type => Post, post => post.comments)
  post: Post;

  @Column()
  content: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
