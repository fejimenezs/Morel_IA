import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Session } from '../sessions/session.entity';

@Entity('session_analysis')
export class SessionAnalysis {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // FK REAL: session_id (UNIQUE)
  @OneToOne(() => Session, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'session_id' })
  session: Session;

  @Column({ type: 'text', nullable: true })
  transcription: string | null;

  @Column({ type: 'text', nullable: true })
  summary: string | null;

  // DB: sentiment_score
  @Column({ name: 'sentiment_score', type: 'numeric', precision: 5, scale: 2, nullable: true })
  sentimentScore: number | null;

  @Column({ type: 'jsonb', nullable: true })
  emotions: any | null;

  @Column({ type: 'jsonb', nullable: true })
  topics: any | null;

  @Column({ type: 'jsonb', nullable: true })
  risks: any | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
