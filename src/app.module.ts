import { Module } from '@nestjs/common';
import { UsersModule } from './api/users/users.module';
import { UsersService } from './api/users/users.service';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
