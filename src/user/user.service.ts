import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}
  async create(user: Partial<Users>): Promise<Users> {
    return this.userRepository.save(user);
  }
  async createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<Users> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return this.userRepository.save(newUser);
  }
  async validateUser(email: string, password: string): Promise<Users | null> {
    const user = await this.findOneByEmail(email);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }
  async findOneByEmail(email: string): Promise<Users | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  async findAllUsers(): Promise<Users[]> {
    return await this.userRepository.find();
  }

  async findUserById(id: number): Promise<Users> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async updateUser(id: number, userData: Partial<Users>): Promise<Users> {
    await this.userRepository.update(id, userData);
    return await this.userRepository.findOne({ where: { id } });
  }

  async deleteUser(id: number): Promise<boolean> {
    const result = await this.userRepository.delete(id);
    return result.affected > 0;
  }
}
