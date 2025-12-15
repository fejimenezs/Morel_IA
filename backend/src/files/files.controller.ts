import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { FilesService } from './files.service';

@Controller('api/files')
export class FilesController {
  constructor(private service: FilesService) {}

  @Get()
  byPatient(@Query('patientId') patientId: string) {
    return this.service.byPatient(patientId);
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
