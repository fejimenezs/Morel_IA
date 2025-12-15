import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/patients')
@UseGuards(JwtAuthGuard)
export class PatientsController {
  constructor(private readonly service: PatientsService) {}

  @Get()
  getAll(@Req() req: any) {
    return this.service.getAll(req.user.id);
  }

  @Get(':id')
  getById(@Param('id') id: string, @Req() req: any) {
    return this.service.getById(id, req.user.id);
  }

  @Post()
  create(@Req() req: any, @Body() body: any) {
    return this.service.create({
      ...body,
      psychologist: { id: req.user.id },
    });
  }
}
