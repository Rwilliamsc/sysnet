import { PrismaService } from '@/prisma/prisma.service'
import { User } from '../entities/user.entity'
import { CreateUserDto } from '../dto/create-user.dto'
import { Prisma } from '@prisma/client'
import { UpdateUserDto } from '../dto/update-user.dto'

export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    return this.prisma.user.create({ data })
  }

  async findAll(params: {
    skip?: number
    take?: number
    cursor?: Prisma.UserWhereUniqueInput
    where?: Prisma.UserWhereInput
  }): Promise<User[]> {
    const { skip, take, cursor, where } = params
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
    })
  }

  async findOne(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } })
  }

  async findEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } })
  }

  async update(id, data: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({ where: { id }, data })
  }

  async remove(id: number): Promise<User> {
    return this.prisma.user.delete({ where: { id } })
  }
}
