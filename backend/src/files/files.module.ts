import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './file.entity';
import { Patient } from '../patients/patient.entity';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FileEntity, Patient])],
  providers: [FilesService],
  controllers: [FilesController],
})
export class FilesModule {}
