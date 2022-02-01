import { Body, Controller, Post, Res } from '@nestjs/common';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { User } from './interfaces/User.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/')
  async create(@Body() createUserDTO: CreateUserDTO): Promise<any> {
    return createUserDTO;
  }
}
