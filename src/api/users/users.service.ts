import { UsersRepository } from "src/repositories/users.repository";
import { CreateUserDto } from "../DTO/create-user.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    createUser(data: CreateUserDto) {
        const { name, avatarUrl } = data
        return this.usersRepository.createUser({data: {
            name: name,
            avatarUrl: avatarUrl
        }})
    }

    findOne() {
        return this.usersRepository.findAll()
    }
}