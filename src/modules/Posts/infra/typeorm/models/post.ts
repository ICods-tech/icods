import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne } from 'typeorm'
import Comment from './comment'
import Like from './like'
import User from '@modules/Users/infra/typeorm/models/user'
import QRCode from '@modules/QRCodes/infra/typeorm/models/QRCode';

@Entity('posts')
export default class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(type => User, {
    onDelete: 'CASCADE'
  })
  @JoinColumn()
  user?: User;

  @Column('uuid')
  userId: string;

  @OneToOne(type => QRCode)
  @JoinColumn()
  qrcode?: QRCode;

  @Column()
  qrcodeId: string;

  @OneToMany(type => Comment, comment => comment.post, {
    cascade: true
  })
  comments: Comment[] | [];

  @OneToMany(type => Like, like => like.post, {
    cascade: true
  })
  likes: Like[] | [];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}