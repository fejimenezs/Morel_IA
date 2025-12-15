import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from '../patients/patient.entity';
import { Session } from '../sessions/session.entity';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepo: Repository<Patient>,
    @InjectRepository(Session)
    private readonly sessionRepo: Repository<Session>,
  ) {}

  async getStats(psychologistId: string) {
    const patientsCount = await this.patientRepo.count({
      where: { psychologist: { id: psychologistId } },
    });

    const sessionsCount = await this.sessionRepo.count({
      where: {
        patient: {
          psychologist: { id: psychologistId },
        },
      },
    });

    const latestPatients = await this.patientRepo.find({
      where: { psychologist: { id: psychologistId } },
      order: { created_at: 'DESC' },
      take: 5,
    });

    return {
      patientsCount,
      sessionsCount,
      hoursSaved: sessionsCount,
      latestPatients: latestPatients.map((p) => ({
        id: p.id,
        fullName: p.full_name,
        status: p.status,
        createdAt: p.created_at,
      })),
      serverNow: new Date().toISOString(),
    };
  }
}
