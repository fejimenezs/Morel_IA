import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { Patient } from '../patients/patient.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'full_name' })
  full_name: string;

  @Column({ unique: true })
  email: string;

  @Column({ name: 'password_hash' })
  password_hash: string;

  @Column({ default: 'PSYCHOLOGIST' })
  role: 'ADMIN' | 'PSYCHOLOGIST';

  @Column({ name: 'is_active', default: true })
  is_active: boolean;

  @OneToMany(() => Patient, (patient) => patient.psychologist)
  patients: Patient[];

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;
}
