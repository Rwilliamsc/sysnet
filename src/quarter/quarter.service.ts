import { Injectable } from '@nestjs/common'
import { CreateQuarterDto } from './dto/create-quarter.dto'
import { UpdateQuarterDto } from './dto/update-quarter.dto'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class QuarterService {
  private readonly prisma: PrismaService

  create(createQuarterDto: CreateQuarterDto) {
    return this.prisma.quarter.create({ data: createQuarterDto })
  }

  findAll() {
    return this.prisma.quarter.findMany()
  }

  findOne(id: number) {
    return this.prisma.quarter.findUnique({ where: { id } })
  }

  update(id: number, updateQuarterDto: UpdateQuarterDto) {
    return this.prisma.quarter.update({ where: { id }, data: updateQuarterDto })
  }

  remove(id: number) {
    return this.prisma.quarter.delete({ where: { id } })
  }
}
