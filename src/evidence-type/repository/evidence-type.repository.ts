import { PrismaService } from '@/prisma/prisma.service'
import { EvidenceType } from '../entities/evidence-type.entity'
import { Injectable } from '@nestjs/common'

@Injectable()
export class EvidenceTypeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data): Promise<EvidenceType> {
    return this.prisma.evidenceType.create({ data })
  }
  async findOne(id): Promise<EvidenceType> {
    return this.prisma.evidenceType.findUnique({ where: { id } })
  }
  async findAll(): Promise<EvidenceType[]> {
    return this.prisma.evidenceType.findMany()
  }
  async update(id, data): Promise<EvidenceType> {
    return this.prisma.evidenceType.update({ where: { id }, data })
  }
  async delete(id): Promise<EvidenceType> {
    return this.prisma.evidenceType.delete({ where: { id } })
  }
}
