import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto } from '../DTO/create-user.dto';
import { UsersService } from './users.service';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Controller('/api')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly httpService: HttpService) {}

  @Post('/users')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto)
  }

  @Get('/user/:id')
  async findOne(@Param('id') id: number) {
    const { data } = await firstValueFrom(
      this.httpService.get(`https://reqres.in/api/users/${id}`).pipe(
        catchError((err: AxiosError) => {
          console.log(err.response.data)
          throw 'error Happened'
        })
      )
    )
    return data
  }
}
