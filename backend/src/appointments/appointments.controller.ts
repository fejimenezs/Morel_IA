import { Controller, Get, Post, Put, Query, Param, Body } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';

@Controller('api/appointments')
export class AppointmentsController {
  constructor(private service: AppointmentsService) {}

  @Get()
  byPatient(@Query('patientId') patientId: string) {
    return this.service.byPatient(patientId);
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }

  @Put(':id/status')
  update(@Param('id') id: string, @Body() body: { status: string }) {
    return this.service.updateStatus(id, body.status);
  }
}
