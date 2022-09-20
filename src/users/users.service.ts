import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'Son' },
    { id: 2, name: 'Ún' },
  ];

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }
    return this.users;
  }

  findById(id: number): User {
    const user = this.users.find((item) => item.id === id);

    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  createUser(createUserDto: CreateUserDto): User {
    const userNew = { id: Date.now(), ...createUserDto };
    this.users.push(userNew);
    return userNew;
  }
}
