import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Patient } from '../patients/patient.entity';
import { Session } from '../sessions/session.entity';
import { SessionAnalysis } from '../session-analysis/session-analysis.entity';
import { Appointment } from '../appointments/appointment.entity';
import { FileEntity } from '../files/file.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',

  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  entities: [
    User,
    Patient,
    Session,
    SessionAnalysis,
    Appointment,
    FileEntity,
  ],

  synchronize: false, 
  ssl: {
    rejectUnauthorized: false,
  },
};
