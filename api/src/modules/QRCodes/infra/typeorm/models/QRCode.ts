import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm'
import User from '../../../../Users/infra/typeorm/models/user'

@Entity('qrcodes')
export default class QRCode {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  enabled: boolean;

  @Column()
  link: string;

  @ManyToOne(() => User, user => user.id)
  user_id: string;
}
