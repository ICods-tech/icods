import Post from '@modules/Posts/infra/typeorm/models/post';
import { Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm'
import User from '../../../../Users/infra/typeorm/models/user'

@Entity('qrcodes')
export default class QRCode {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  enabled: boolean;

  @Column()
  link: string;

  @Column()
  content: string;

  @ManyToOne(type => User, user => user.qrcodes, {
    onDelete: 'CASCADE'
  })
  user: Omit<User, 'created_at' | 'updated_at' | 'password' | 'qrcodes'>;

  @OneToOne(type => Post)
  @JoinColumn()
  post?: Post;

  @Column({ nullable: true })
  postId?: string;
}
