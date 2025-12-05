import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(data: any) {
    const userExists = await this.usersService.findByEmail(data.email);

    if (userExists) {
      throw new BadRequestException('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await this.usersService.create({
      full_name: data.full_name,
      email: data.email,
      password_hash: hashedPassword,
      role: 'doctor',
    });

    return user;
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const validPassword = await bcrypt.compare(password, user.password_hash);

    if (!validPassword) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      id: user.id,
      role: user.role,
      email: user.email,
    };

    const token = this.jwtService.sign(payload);

    return {
      token,
      user,
    };
  }
}
