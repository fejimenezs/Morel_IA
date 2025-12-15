import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Session } from '../sessions/session.entity';

@Entity('patients')
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'psychologist_id' })
  psychologist: User;

  @Column()
  full_name: string;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  occupation: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  address: string;

  @Column({ type: 'text', nullable: true })
  reason_for_consultation: string;

  @Column({ default: 'ACTIVE' })
  status: 'ACTIVE' | 'INACTIVE';

  @OneToMany(() => Session, (session) => session.patient)
  sessions: Session[];

  @CreateDateColumn()
  created_at: Date;
}
