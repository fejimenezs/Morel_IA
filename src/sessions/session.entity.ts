import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Patient } from '../patients/patient.entity';

@Entity('sessions')
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Patient, (patient) => patient.sessions, { eager: true })
  patient: Patient;

  @Column({ type: 'timestamptz' })
  date: Date;

  @Column({ type: 'text', nullable: true })
  notes?: string;

  @Column({ type: 'text', nullable: true })
  aiSummary?: string;

  @CreateDateColumn()
  createdAt: Date;
}
