import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Session } from '../sessions/session.entity';

@Entity('session_analysis')
export class SessionAnalysis {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  
  @OneToOne(() => Session, (session) => session.analysis, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'session_id' })
  session: Session;

  @Column()
  session_id: string;

  @Column('text', { nullable: true })
  transcription: string;

  @Column('text', { nullable: true })
  summary: string;

  @Column('decimal', { precision: 4, scale: 3, nullable: true })
  sentiment_score: number;

  @Column('jsonb', { nullable: true })
  emotions: any;

  @Column('jsonb', { nullable: true })
  topics: any;

  @Column('jsonb', { nullable: true })
  risk: any;

  @Column({ nullable: true })
  ai_model: string;

  @Column('decimal', { precision: 4, scale: 3, nullable: true })
  confidence_score: number;

  @CreateDateColumn()
  created_at: Date;
}
