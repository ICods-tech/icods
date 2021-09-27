import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from 'typeorm'

@Entity('followers')
export default class Follower {
  @Column('uuid')
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  userId: string;

  @Column()
  requestFollower: boolean;

  @Column('uuid')
  followingId: string;

  @CreateDateColumn()
  created_at: Date;
}
