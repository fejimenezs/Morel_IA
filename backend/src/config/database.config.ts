import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Patient } from '../patients/patient.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'santiago',
  password: 'su683021',   // 👈 STRING HARDCODEADO
  database: 'api_rest',
  entities: [User, Patient],
  synchronize: false,
};
