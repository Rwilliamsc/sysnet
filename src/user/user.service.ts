import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './entities/user.entity'
import { UserRepository } from './repository/user.repository'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const data: CreateUserDto = {
        ...createUserDto,
        password: await bcrypt.hash(createUserDto.password, 10),
      }
      const createdUser = await this.repository.create(data)
      return {
        ...createdUser,
        password: undefined,
      }
    } catch (error) {
      throw new UnprocessableEntityException(error.message)
    }
  }

  findAll(): Promise<User[]> {
    return this.repository.findAll()
  }

  findOne(id: number): Promise<User | null> {
    return this.repository.findOne(id)
  }

  findEmail(email: string): Promise<User> {
    return this.repository.findEmail(email)
  }

  async update(id: number, updateUserDto: CreateUserDto): Promise<User> {
    const user = await this.repository.findOne(id)

    if (!user) {
      throw new NotFoundException(`User ${id} not found`)
    }

    return this.repository.update(id, updateUserDto)
  }

  async remove(id: number): Promise<User> {
    const user = await this.repository.findOne(id)

    if (!user) {
      throw new NotFoundException(`User ${id} not found`)
    }

    return this.repository.remove(id)
  }
}
