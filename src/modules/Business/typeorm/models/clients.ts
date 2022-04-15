import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import Business from './business';
import Lots from './lots';

@Entity('clients')
export default class Clients {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    unique: true,
  })
  name: string;

  @Column({
    type: 'text',
    unique: true,
  })
  email: string;

  @Column()
  phone: string;

  @ManyToOne((type) => Business, (business) => business.clients, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  business?: Omit<
    Business,
    'created_at' | 'updated_at' | 'password' | 'clients'
  >;

  @OneToMany((type) => Lots, (lot: Lots) => lot.client, {
    cascade: true,
  })
  lots: Lots[] | [];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
