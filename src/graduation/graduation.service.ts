import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateGraduationDto } from './dto/create-graduation.dto'
import { UpdateGraduationDto } from './dto/update-graduation.dto'
import { PrismaService } from '@/prisma/prisma.service'
import { GraduationRepository } from './repository/graduation.repository'

@Injectable()
export class GraduationService {
  private readonly repository: GraduationRepository

  create(createGraduationDto: CreateGraduationDto) {
    return this.repository.create(createGraduationDto)
  }

  findAll() {
    return this.repository.findAll()
  }

  findOne(id: number) {
    return this.repository.findOne(id)
  }

  async update(id: number, updateGraduationDto: UpdateGraduationDto) {
    const graduation = await this.repository.findOne(id)

    if (!graduation) {
      throw new NotFoundException(`Graduation ${id} not found`)
    }

    return this.repository.update(id, updateGraduationDto)
  }

  async remove(id: number) {
    const graduation = await this.repository.findOne(id)

    if (!graduation) {
      throw new NotFoundException(`Graduation ${id} not found`)
    }

    return this.repository.delete(id)
  }
}
