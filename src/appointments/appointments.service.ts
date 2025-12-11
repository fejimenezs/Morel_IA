import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './appointment.entity';
import { Patient } from '../patients/patient.entity';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private readonly repo: Repository<Appointment>,
    @InjectRepository(Patient)
    private readonly patientRepo: Repository<Patient>,
  ) {}

  findAll() {
    return this.repo.find({ order: { date: 'ASC' } });
  }

  async create(data: { patientId: number; date: string; status?: string }) {
    const patient = await this.patientRepo.findOne({
      where: { id: data.patientId },
    });

    if (!patient) {
      throw new NotFoundException(`Patient with ID ${data.patientId} not found`);
    }

    const appointment = this.repo.create({
      patient,
      date: new Date(data.date),
      status: data.status || 'scheduled',
    });

    return this.repo.save(appointment);
  }

  async update(
    id: number,
    data: Partial<{ date: string; status: string }>,
  ) {
    const appointment = await this.repo.findOne({ where: { id } });
    if (!appointment) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }

    if (data.date) appointment.date = new Date(data.date);
    if (data.status) appointment.status = data.status;

    return this.repo.save(appointment);
  }

  async remove(id: number) {
    await this.repo.delete(id);
    return { deleted: true };
  }
}
