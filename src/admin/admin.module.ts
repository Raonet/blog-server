import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { AuthService } from './auth.service';
import { AdminEntity } from './admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminEntity])],
  providers: [AuthService],
  controllers: [AdminController],
})
export class AdminModule {}
