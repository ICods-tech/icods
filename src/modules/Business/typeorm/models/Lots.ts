import QRCode from '@modules/QRCodes/typeorm/models/QRCode';
import { AfterLoad, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Client from './clients';

@Entity('lots')
export default class Lots {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(type => Client, client => client.lots, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',

  })
  client?: Omit<Client, 'created_at' | 'updated_at' | 'lots'>;

  @OneToMany(type => QRCode, qrcode => qrcode.lot, {
    cascade: true,
    lazy: true
  })
  qrcodes?: Promise<QRCode[]>;

  @Column({
    type: 'int',
    nullable: true,
    default: 0
  })
  numberOfQRCodes: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}
