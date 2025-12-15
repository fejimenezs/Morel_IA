import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Patient } from '../patients/patient.entity';

@Entity('appointments')
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Patient, { nullable: false })
  @JoinColumn({ name: 'patient_id' }) // 👈 clave
  patient: Patient;

  @Column()
  title: string;

  @Column({ name: 'start_datetime', type: 'timestamptz' })
  startDatetime: Date;

  @Column({ name: 'end_datetime', type: 'timestamptz' })
  endDatetime: Date;

  @Column({ default: 'SESSION' })
  type: 'SESSION' | 'FOLLOW_UP' | 'OTHER';

  @Column({ default: 'SCHEDULED' })
  status: 'SCHEDULED' | 'COMPLETED' | 'CANCELLED';

  @Column({ type: 'text', nullable: true })
  notes: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
