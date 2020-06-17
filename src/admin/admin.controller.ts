import { Controller, Post, Body } from '@nestjs/common';
import { AdminEntity } from './admin.entity';
import { AuthService } from './auth.service';

@Controller('admin')
export class AdminController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() user: AdminEntity): Promise<any> {
    return await this.authService.login(user.name, user.password);
  }
}
