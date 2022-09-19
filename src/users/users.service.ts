import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'Son' },
    { id: 2, name: 'Ún' },
  ];

  findAll(): User[] {
    return this.users;
  }

  findById(id: number): User {
    return this.users.find((item) => item.id === id);
  }

  createUser(createUserDto: CreateUserDto): User {
    const userNew = { id: Date.now(), ...createUserDto };
    this.users.push(userNew);
    return userNew;
  }
}