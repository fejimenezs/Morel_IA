import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { UsersModule } from './users/users.module';
import { PatientsModule } from './patients/patients.module';
import { SessionsModule } from './sessions/sessions.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { FilesModule } from './files/files.module';
import { SessionAnalysisModule } from './session-analysis/session-analysis.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from "./auth/auth.module";



@Module({
  imports: [
    
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // 2. TypeORM  ConfigService 
        TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: Number(config.get('DB_PORT')),
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),

        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,

        // 🔴 ESTO ES OBLIGATORIO EN RENDER
        ssl: {
          rejectUnauthorized: false,
        },
      }),
    }),


    UsersModule,
    PatientsModule,
    SessionsModule,
    AppointmentsModule,
    FilesModule,
    SessionAnalysisModule,
    DashboardModule,
    AuthModule,
  ],
})
export class AppModule {}
