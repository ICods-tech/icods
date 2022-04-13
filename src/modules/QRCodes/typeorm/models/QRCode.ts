import Lots from '@modules/Business/typeorm/models/lots';
import Lot from '@modules/Business/typeorm/models/lots';
import Post from '@modules/Posts/typeorm/models/post';
import { IColors } from '@modules/QRCodes/interfaces/IColors';
import { IStatus } from '@modules/QRCodes/interfaces/IStatusQRCode';
import { Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, IsNull } from 'typeorm'
import User from '../../../Users/typeorm/models/user'

@Entity('qrcodes')
export default class QRCode {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: ['ACTIVE', 'INACTIVE', 'IN_PROGRESS'],
    default: 'INACTIVE',
    nullable: true
  })
  status: IStatus;

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
    enum: ['red', 'blue', 'green', 'yellow', 'black', 'noColor', 'cyan', 'pink'],
    default: 'noColor',
    nullable: true
  })
  madeColor?: IColors;

  @Column({
    type: 'enum',
    enum: ['red', 'blue', 'green', 'yellow', 'black', 'noColor', 'cyan', 'pink'],
    default: 'noColor',
    nullable: true
  })
  receivedColor?: IColors;

  @ManyToOne(type => User, user => user.qrcodes, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    eager: true
  })
  user?: Omit<User, 'created_at' | 'updated_at' | 'password' | 'qrcodes'>;

  @ManyToOne(type => Lot, lot => lot.qrcodes, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  lot?: string;

  @ManyToOne(type => User, user => user.receivedQRCodes, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  receivedUser?: Omit<User, 'created_at' | 'updated_at' | 'password' | 'qrcodes'> | null;

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
