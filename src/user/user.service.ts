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
    private userRepository: Repository<User>,
  ) {}
  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  async  findAll(): Promise<User[]> {
    return await this.userRepository.find();
}

 async findById(id: number): Promise<User> {
  return await this.userRepository.findOne(id);
  
 }

 async update(user: User): Promise<UpdateResult> {
  return await this.userRepository.update(user.id, user);
}

async delete(id): Promise<DeleteResult> {
  return await this.userRepository.delete(id);
}

async  create(user: User): Promise<User> {
  return await this.userRepository.save(user);
}
}
