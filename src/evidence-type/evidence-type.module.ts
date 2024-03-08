import { Module } from '@nestjs/common'
import { EvidenceTypeService } from './evidence-type.service'
import { EvidenceTypeController } from './evidence-type.controller'
import { PrismaService } from 'src/prisma/prisma.service'
import { EvidenceTypeRepository } from './repository/evidence-type.repository'

@Module({
  controllers: [EvidenceTypeController],
  providers: [EvidenceTypeService, PrismaService, EvidenceTypeRepository],
})
export class EvidenceTypeModule {}
