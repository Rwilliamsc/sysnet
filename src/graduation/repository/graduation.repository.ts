import { PrismaService } from '@/prisma/prisma.service'
import { Graduation } from '../entities/graduation.entity'
import { Injectable } from '@nestjs/common'

@Injectable()
export class GraduationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data): Promise<Graduation> {
    return this.prisma.graduation.create({ data })
  }
  async findOne(id): Promise<Graduation> {
    return this.prisma.graduation.findUnique({ where: { id } })
  }
  async findAll(): Promise<Graduation[]> {
    return this.prisma.graduation.findMany()
  }
  async update(id, data): Promise<Graduation> {
    return this.prisma.graduation.update({ where: { id }, data })
  }
  async delete(id): Promise<Graduation> {
    return this.prisma.graduation.delete({ where: { id } })
  }
}
