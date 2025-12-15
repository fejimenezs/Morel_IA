import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/sessions')
@UseGuards(JwtAuthGuard)
export class SessionsController {
  constructor(private readonly service: SessionsService) {}

  @Get('patient/:patientId')
  getByPatient(@Param('patientId') patientId: string) {
    return this.service.findByPatient(patientId);
  }

  @Post('patient/:patientId')
  create(
    @Param('patientId') patientId: string,
    @Body() body: { title?: string },
  ) {
    return this.service.create(patientId, body);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body() body: { status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' },
  ) {
    return this.service.updateStatus(id, body.status);
  }
}
