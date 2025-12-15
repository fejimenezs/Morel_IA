import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './appointment.entity';
import { Patient } from '../patients/patient.entity';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private repo: Repository<Appointment>,
    @InjectRepository(Patient)
    private patients: Repository<Patient>,
  ) {}

  async byPatient(patientId: string) {
    return this.repo.find({
      where: { patient: { id: patientId } },
      order: { startDatetime: 'ASC' },
    });
  }

  async create(data: {
    patientId: string;
    title: string;
    startDatetime: Date;
    endDatetime: Date;
    type?: any;
    notes?: string;
  }) {
    const patient = await this.patients.findOne({ where: { id: data.patientId } });
    if (!patient) throw new NotFoundException('Patient not found');

    const appt = this.repo.create({
      patient,
      title: data.title,
      startDatetime: data.startDatetime,
      endDatetime: data.endDatetime,
      type: data.type ?? 'SESSION',
      notes: data.notes,
    });
    return this.repo.save(appt);
  }

  async updateStatus(id: string, status: any) {
    const appt = await this.repo.findOne({ where: { id } });
    if (!appt) throw new NotFoundException('Appointment not found');
    appt.status = status;
    return this.repo.save(appt);
  }
}
