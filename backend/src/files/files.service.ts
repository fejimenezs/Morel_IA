import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileEntity } from './file.entity';
import { Patient } from '../patients/patient.entity';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileEntity)
    private readonly repo: Repository<FileEntity>,
    @InjectRepository(Patient)
    private readonly patients: Repository<Patient>,
  ) {}

  async byPatient(patientId: string) {
    return this.repo.find({
      where: { patient: { id: patientId } },
    });
  }

  async create(data: {
    patientId: string;
    fileName: string;
    fileUrl: string;
    fileType?: string;
  }) {
    const patient = await this.patients.findOne({
      where: { id: data.patientId },
    });

    if (!patient) {
      throw new NotFoundException('Patient not found');
    }

    return this.repo.save(
      this.repo.create({
        patient,
        fileName: data.fileName,
        fileUrl: data.fileUrl,
        fileType: data.fileType,
        uploadedAt: new Date(),
      }),
    );
  }
}
