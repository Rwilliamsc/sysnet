import { PrismaService } from '@/prisma/prisma.service'
import { Quarter } from '../entities/quarter.entity'
import { Injectable } from '@nestjs/common'

@Injectable()
export class QuarterRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data): Promise<Quarter> {
    return this.prisma.quarter.create({ data })
  }
  async findAll(): Promise<Quarter[]> {
    return this.prisma.quarter.findMany()
  }
  async findOne(id): Promise<Quarter> {
    return this.prisma.quarter.findUnique({ where: { id } })
  }
  async update(id, data): Promise<Quarter> {
    return this.prisma.quarter.update({ where: { id }, data })
  }
  async remove(id): Promise<Quarter> {
    return this.prisma.quarter.delete({ where: { id } })
  }
}
