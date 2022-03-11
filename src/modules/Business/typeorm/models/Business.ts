import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, IsNull, BeforeInsert } from 'typeorm'
import { Exclude } from 'class-transformer'
import Clients from './clients';

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

  @OneToMany(type => Clients, client => client.business, {
    cascade: true,
    eager: true
  })
  clients?: Clients[] | [];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
