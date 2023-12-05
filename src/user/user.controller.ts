import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Users } from './users.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(
    @Body() body: { name: string; email: string; password: string },
  ) {
    const { name, email, password } = body;
    const newUser = await this.userService.createUser(name, email, password);
    return { message: 'User registered successfully', user: newUser };
  }
  @Get()
  async getAllUsers(): Promise<Users[]> {
    return await this.userService.findAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<Users> {
    return await this.userService.findUserById(+id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: Partial<Users>,
  ): Promise<Users> {
    return await this.userService.updateUser(+id, userData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<boolean> {
    return await this.userService.deleteUser(+id);
  }
}
