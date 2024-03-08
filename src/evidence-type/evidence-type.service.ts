import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateEvidenceTypeDto } from './dto/create-evidence-type.dto'
import { UpdateEvidenceTypeDto } from './dto/update-evidence-type.dto'
import { PrismaService } from '@/prisma/prisma.service'
import { EvidenceTypeRepository } from './repository/evidence-type.repository'

@Injectable()
export class EvidenceTypeService {
  constructor(private readonly repository: EvidenceTypeRepository) {}

  create(createEvidenceTypeDto: CreateEvidenceTypeDto) {
    return this.repository.create(createEvidenceTypeDto)
  }

  findAll() {
    return this.repository.findAll()
  }

  findOne(id: number) {
    return this.repository.findOne(id)
  }

  async update(id: number, updateEvidenceTypeDto: UpdateEvidenceTypeDto) {
    const evidenceType = await this.repository.findOne(id)

    if (!evidenceType) {
      throw new NotFoundException(`Evidence type ${id} not found`)
    }
    return this.repository.update(id, updateEvidenceTypeDto)
  }

  async remove(id: number) {
    const evidenceType = await this.repository.findOne(id)

    if (!evidenceType) {
      throw new NotFoundException(`Evidence type ${id} not found`)
    }
    return this.repository.delete(id)
  }
}
