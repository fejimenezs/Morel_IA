import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(
    fullName: string,
    email: string,
    password: string,
  ) {
    const password_hash = await bcrypt.hash(password, 10);

    const user = this.userRepo.create({
      full_name: fullName,      // ✅ snake_case
      email,
      password_hash,            // ✅ snake_case
      role: 'PSYCHOLOGIST',
    });

    await this.userRepo.save(user);

    return { message: 'Usuario creado correctamente' };
  }

  async login(email: string, password: string) {
    const user = await this.userRepo.findOne({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const isValid = await bcrypt.compare(
      password,
      user.password_hash,       // ✅ snake_case
    );

    if (!isValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
