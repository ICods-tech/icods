import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, IsNull, BeforeInsert } from 'typeorm'
import Client from './clients'
import { Exclude } from 'class-transformer'

@Entity('businesses')
export default class Business {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    unique: true,
  })
  companyName: string;


  @Column({
    type: 'text',
    unique: true,
  })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @OneToMany(type => Client, client => client.business, {
    cascade: true
  })
  clients?: Client[] | [];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
