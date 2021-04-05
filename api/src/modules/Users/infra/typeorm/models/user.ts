import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, IsNull } from 'typeorm'
import QRCode from '../../../../QRCodes/infra/typeorm/models/QRCode'
import { Exclude } from 'class-transformer'

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

  @Column()
  visibility: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
