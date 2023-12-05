// auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}
  @Post('register')
  async register(
    @Body() body: { name: string; email: string; password: string },
  ) {
    const { name, email, password } = body;
    const newUser = await this.userService.createUser(name, email, password);
    return { message: 'User registered successfully', user: newUser };
  }
}
