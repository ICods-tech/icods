import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
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
  })
  clients?: Clients[] | [];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
