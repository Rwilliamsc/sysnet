import { Injectable } from '@nestjs/common'
import { CreateGraduationDto } from './dto/create-graduation.dto'
import { UpdateGraduationDto } from './dto/update-graduation.dto'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class GraduationService {
  constructor(private readonly prisma: PrismaService) {}
  create(createGraduationDto: CreateGraduationDto) {
    return this.prisma.graduation.create({ data: createGraduationDto })
  }

  findAll() {
    return this.prisma.graduation.findMany()
  }

  findOne(id: number) {
    return this.prisma.graduation.findUnique({ where: { id } })
  }

  update(id: number, updateGraduationDto: UpdateGraduationDto) {
    return this.prisma.graduation.update({
      where: { id },
      data: updateGraduationDto,
    })
  }

  remove(id: number) {
    return this.prisma.graduation.delete({ where: { id } })
  }
}
