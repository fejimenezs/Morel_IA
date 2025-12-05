import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PatientsModule } from './patients/patients.module';
import { SessionsModule } from './sessions/sessions.module';
import { SessionAnalysisModule } from './session-analysis/session-analysis.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: false, 
      ssl: {
        rejectUnauthorized: false, // necesario para Render Postgres
      },
    }),
    UsersModule,
    AuthModule,
    PatientsModule,
    SessionsModule,
    SessionAnalysisModule,
  ],
})
export class AppModule {}
