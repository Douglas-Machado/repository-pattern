import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    id: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    avatarUrl?: string;
}