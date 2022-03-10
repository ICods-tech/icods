import QRCode from '@modules/QRCodes/typeorm/models/QRCode';
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Client from './clients';

@Entity('lots')
export default class Lots {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(type => Client, client => client.lots, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    eager: true
  })
  client?: Omit<Client, 'created_at' | 'updated_at' | 'lots'>;

  @OneToMany(type => QRCode, qrcode => qrcode.lot, {
    cascade: true
  })
  qrcodes?: QRCode[] | [];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
