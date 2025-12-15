import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { SessionAnalysisService } from './session-analysis.service';

@Controller('api/session-analysis')
@UseGuards(JwtAuthGuard)
export class SessionAnalysisController {
  constructor(private readonly service: SessionAnalysisService) {}

  // GET /api/session-analysis/:sessionId
  @Get(':sessionId')
  getBySession(@Param('sessionId') sessionId: string) {
    return this.service.getBySession(sessionId);
  }

  // POST /api/session-analysis/:sessionId (genera si no existe)
  @Post(':sessionId')
  generate(@Param('sessionId') sessionId: string) {
    return this.service.generate(sessionId);
  }
}
