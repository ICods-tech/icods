import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, IsNull, BeforeInsert } from 'typeorm'
import QRCode from '../../../QRCodes/typeorm/models/QRCode'
import { Exclude } from 'class-transformer'
import Post from '@modules/Posts/typeorm/models/post';
import Like from '@modules/Posts/typeorm/models/like';
import Comment from '@modules/Posts/typeorm/models/comment';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    type: 'text',
    unique: true,
    nullable: true,
  })
  username: string;

  @Column({
    type: 'text',
    unique: true,
  })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({
    nullable: true,
  })
  @Exclude()
  tempPassword: string;

  @Column()
  visibility: boolean;

  @OneToMany(type => QRCode, qrcode => qrcode.user, {
    cascade: true
  })
  qrcodes?: QRCode[] | [];

  @OneToMany(type => QRCode, qrcode => qrcode.receivedUser, {
    cascade: true
  })
  receivedQRCodes?: QRCode[] | [];

  @OneToMany(type => Post, post => post.user, {
    cascade: true
  })
  posts?: Post[] | [];

  @OneToMany(type => Like, like => like.user, {
    cascade: true
  })
  likes?: Like[] | [];

  @OneToMany(type => Comment, comment => comment.user, {
    cascade: true
  })
  comments?: QRCode[] | [];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}
