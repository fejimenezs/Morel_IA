import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Patient } from '../patients/patient.entity';

@Entity('files')
export class FileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Patient, { nullable: false })
  @JoinColumn({ name: 'patient_id' }) // 👈 clave
  patient: Patient;

  @Column({ name: 'file_name' })
  fileName: string;

  @Column({ name: 'file_url' })
  fileUrl: string;

  @Column({ name: 'file_type', nullable: true })
  fileType: string;

  @CreateDateColumn({ name: 'uploaded_at' })
  uploadedAt: Date;
}
