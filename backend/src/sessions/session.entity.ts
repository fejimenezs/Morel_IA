import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Patient } from '../patients/patient.entity';
import { SessionAnalysis } from '../session-analysis/session-analysis.entity';

@Entity('sessions')
export class Session {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  
  @ManyToOne(() => Patient, (patient) => patient.sessions, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @Column()
  patient_id: string;

  @Column({ nullable: true, length: 500 })
  audio_url: string;

  @Column({ default: 'PENDING' })
  status: string;

  @Column({ nullable: true })
  duration_seconds: number;

  @Column({ nullable: true, length: 50 })
  recording_device: string;

  
  @OneToOne(() => SessionAnalysis, (analysis) => analysis.session)
  analysis: SessionAnalysis;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
