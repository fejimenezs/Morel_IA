import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { Patient } from '../patients/patient.entity';
import { Session } from '../sessions/session.entity';
import { SessionAnalysisModule } from '../session-analysis/session-analysis.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Patient, Session]),
    SessionAnalysisModule,
  ],
  providers: [DashboardService],
  controllers: [DashboardController],
})
export class DashboardModule {}
