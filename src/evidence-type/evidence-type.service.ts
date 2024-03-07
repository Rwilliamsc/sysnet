import { Injectable } from '@nestjs/common'
import { CreateEvidenceTypeDto } from './dto/create-evidence-type.dto'
import { UpdateEvidenceTypeDto } from './dto/update-evidence-type.dto'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class EvidenceTypeService {
  private readonly prisma: PrismaService

  create(createEvidenceTypeDto: CreateEvidenceTypeDto) {
    return this.prisma.evidenceType.create({ data: createEvidenceTypeDto })
  }

  findAll() {
    return this.prisma.evidenceType.findMany()
  }

  findOne(id: number) {
    return this.prisma.evidenceType.findUnique({ where: { id } })
  }

  update(id: number, updateEvidenceTypeDto: UpdateEvidenceTypeDto) {
    return this.prisma.evidenceType.update({
      where: { id },
      data: updateEvidenceTypeDto,
    })
  }

  remove(id: number) {
    return this.prisma.evidenceType.delete({ where: { id } })
  }
}
