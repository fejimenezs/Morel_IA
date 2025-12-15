import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Patient } from '../patients/patient.entity';
import { SessionAnalysis } from '../session-analysis/session-analysis.entity';

@Entity('sessions')
export class Session {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Patient, (patient) => patient.sessions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  audio_url: string;

  @Column({ default: 'PENDING' })
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';

  @OneToOne(() => SessionAnalysis, (analysis) => analysis.session)
  analysis: SessionAnalysis;

  @CreateDateColumn()
  created_at: Date;
}
