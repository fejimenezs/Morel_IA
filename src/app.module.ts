import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PatientsModule } from './patients/patients.module';
import { SessionsModule } from './sessions/sessions.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { AiModule } from './ai/ai.module';

import { Patient } from './patients/patient.entity';
import { Session } from './sessions/session.entity';
import { Appointment } from './appointments/appointment.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',

      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,

      entities: [Patient, Session, Appointment],
      synchronize: true,

      ssl: {
        rejectUnauthorized: false,
      },
    }),

    PatientsModule,
    SessionsModule,
    AppointmentsModule,
    AiModule,
  ],
})
export class AppModule {}
