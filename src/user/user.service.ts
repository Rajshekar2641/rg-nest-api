import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  // findAll() {
  //   return `This action returns all user`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }

  async  findAll(): Promise<User[]> {
    return await this.usersRepository.find();
}

async  create(user: User): Promise<User> {
    return await this.usersRepository.save(user);
}

async update(user: User): Promise<UpdateResult> {
    return await this.usersRepository.update(user.id, user);
}

async delete(id): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
}
}
