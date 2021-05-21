import Post from '@modules/Posts/infra/typeorm/models/post';
import { Colors } from '@modules/QRCodes/interfaces/Colors';
import { Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, IsNull } from 'typeorm'
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

  @Column({
    nullable: true,
    default: false
  })
  favorited?: boolean;

  @Column({
    type: 'enum',
    enum: ['blue', 'green', 'yellow', 'black', 'noColor', 'cyan', 'pink'],
    default: 'noColor',
    nullable: true
  })
  madeColor?: Colors;

  @Column({
    type: 'enum',
    enum: ['blue', 'green', 'yellow', 'black', 'noColor', 'cyan', 'pink'],
    default: 'noColor',
    nullable: true
  })
  receivedColor?: Colors;

  @ManyToOne(type => User, user => user.qrcodes, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  user: Omit<User, 'created_at' | 'updated_at' | 'password' | 'qrcodes'>;

  @ManyToOne(type => User, user => user.receivedQRCodes, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  receivedUser: Omit<User, 'created_at' | 'updated_at' | 'password' | 'qrcodes'> | null;

  @OneToOne(type => Post)
  @JoinColumn()
  post?: Post;

  @Column({ nullable: true })
  postId?: string;

  @CreateDateColumn()
  created_at: Date;

  @Column({ type: 'timestamptz', nullable: true })
  received_at?: Date
}
