import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Session } from './session.entity';
import { Patient } from '../patients/patient.entity';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(Session)
    private readonly repo: Repository<Session>,
    @InjectRepository(Patient)
    private readonly patientRepo: Repository<Patient>,
  ) {}

  // GET /api/sessions/patient/:patientId
  findByPatient(patientId: string) {
    return this.repo.find({
      where: { patient: { id: patientId } },
      order: { created_at: 'DESC' },
    });
  }

  // POST /api/sessions/patient/:patientId
  async create(patientId: string, data: Partial<Session>) {
    const patient = await this.patientRepo.findOne({
      where: { id: patientId },
    });

    if (!patient) {
      throw new NotFoundException('Paciente no encontrado');
    }

    const session = this.repo.create({
      ...data,
      patient,
    });

    return this.repo.save(session);
  }

  // PATCH /api/sessions/:id/status
  async updateStatus(
    id: string,
    status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED',
  ) {
    await this.repo.update(id, { status });
    return this.repo.findOne({ where: { id } });
  }
}
