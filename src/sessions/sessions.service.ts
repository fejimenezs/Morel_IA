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

  findAll(patientId?: number) {
    if (patientId) {
      return this.repo.find({
        where: { patient: { id: patientId } },
        order: { date: 'DESC' },
      });
    }

    return this.repo.find({ order: { date: 'DESC' } });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  async create(data: { patientId: number; date: string; notes?: string }) {
    const patient = await this.patientRepo.findOne({
      where: { id: data.patientId },
    });

    if (!patient) {
      throw new NotFoundException(
        `Patient with ID ${data.patientId} not found`,
      );
    }

    const session = this.repo.create({
      patient,
      date: new Date(data.date),
      notes: data.notes,
    });

    return this.repo.save(session);
  }

  async update(
    id: number,
    data: Partial<{ date: string; notes: string; aiSummary: string }>,
  ) {
    const session = await this.repo.findOne({ where: { id } });

    if (!session) {
      throw new NotFoundException(`Session with ID ${id} not found`);
    }

    if (data.date) session.date = new Date(data.date);
    if (data.notes !== undefined) session.notes = data.notes;
    if (data.aiSummary !== undefined) session.aiSummary = data.aiSummary;

    return this.repo.save(session);
  }

  async remove(id: number) {
    await this.repo.delete(id);
    return { deleted: true };
  }
}
