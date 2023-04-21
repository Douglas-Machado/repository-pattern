import { PrismaService } from "src/prisma/prisma.service";
import { Prisma, User } from "@prisma/client"
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersRepository {
    constructor(private prisma: PrismaService) {}
    createUser(params: { data: Prisma.UserCreateInput}) {
        const { data } = params
        return this.prisma.user.create({data})
    }

    async findAll(): Promise<User[]> {
        return await this.prisma.user.findMany()
    }
}