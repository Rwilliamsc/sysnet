import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateQuarterDto } from './dto/create-quarter.dto'
import { UpdateQuarterDto } from './dto/update-quarter.dto'
import { PrismaService } from '@/prisma/prisma.service'
import { QuarterRepository } from './repository/quarter.repository'

@Injectable()
export class QuarterService {
  constructor(private readonly repository: QuarterRepository) {}

  create(createQuarterDto: CreateQuarterDto) {
    return this.repository.create(createQuarterDto)
  }

  findAll() {
    return this.repository.findAll()
  }

  findOne(id: number) {
    return this.repository.findOne(id)
  }

  async update(id: number, updateQuarterDto: UpdateQuarterDto) {
    const quarter = await this.repository.findOne(id)

    if (!quarter) {
      throw new NotFoundException(`Quarter ${id} not found`)
    }

    return this.repository.update(id, updateQuarterDto)
  }

  async remove(id: number) {
    const quarter = await this.repository.findOne(id)

    if (!quarter) {
      throw new NotFoundException(`Quarter ${id} not found`)
    }

    return this.repository.remove(id)
  }
}
