import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionAnalysis } from './session-analysis.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SessionAnalysis])],
  exports: [TypeOrmModule],
})
export class SessionAnalysisModule {}
