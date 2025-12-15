import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionAnalysis } from './session-analysis.entity';
import { Session } from '../sessions/session.entity';
import { SessionAnalysisService } from './session-analysis.service';
import { SessionAnalysisController } from './session-analysis.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SessionAnalysis, Session])],
  providers: [SessionAnalysisService],
  controllers: [SessionAnalysisController],
})
export class SessionAnalysisModule {}
