import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './patient.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient)
    private patientRepository: Repository<Patient>,
  ) {}

  create(data: Partial<Patient>) {
    return this.patientRepository.save(data);
  }

  findByDoctor(user_id: string) {
    return this.patientRepository.find({
      where: { user_id },
      order: { created_at: 'DESC' },
    });
  }

  findOne(id: string, user_id: string) {
    return this.patientRepository.findOne({
      where: { id, user_id },
    });
  }

  async update(id: string, user_id: string, data: Partial<Patient>) {
    await this.patientRepository.update({ id, user_id }, data);
    return this.findOne(id, user_id);
  }

  remove(id: string, user_id: string) {
    return this.patientRepository.delete({ id, user_id });
  }
}
