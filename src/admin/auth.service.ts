import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { JwtPayload } from './jwt-payload.interface';
import * as jwt from 'jsonwebtoken';
import { AdminEntity } from './admin.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  user: AdminEntity;
  constructor(
    @InjectRepository(AdminEntity)
    private readonly employeeRepository: Repository<AdminEntity>,
  ) {}

  async createToken(user: string, password: string): Promise<any> {
    const userInfo: JwtPayload = { user: user, password: password };
    return jwt.sign(userInfo, 'secretKey', { expiresIn: 3600 });
  }

  async validateUser(name: string): Promise<any> {
    return this.employeeRepository.findOne({ name: name });
  }

  async findEmployeeByName(name: string): Promise<AdminEntity> {
    return this.employeeRepository.findOne({ name: name });
  }

  getUser(): AdminEntity {
    return this.user;
  }

  async login(name: string, password: string): Promise<any> {
    this.user = await this.employeeRepository.findOne({ name: name });
    if (this.user != undefined && this.user.password == password) {
      return this.createToken(this.user.name, this.user.password);
    } else {
      return 'login failed !';
    }
  }
}
