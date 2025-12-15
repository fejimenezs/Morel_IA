import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './patient.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient)
    private readonly repo: Repository<Patient>,
  ) {}

  getAll(psychologistId: string) {
    return this.repo.find({
      where: {
        psychologist: { id: psychologistId },
      },
      order: { created_at: 'DESC' },
    });
  }

  getById(id: string, psychologistId: string) {
    return this.repo.findOne({
      where: {
        id,
        psychologist: { id: psychologistId },
      },
      relations: ['sessions'], // 🔥 ahora SÍ existe
      order: {
        sessions: {
          created_at: 'DESC',
        },
      },
    });
  }

  create(data: Partial<Patient>) {
    const patient = this.repo.create(data);
    return this.repo.save(patient);
  }
}
