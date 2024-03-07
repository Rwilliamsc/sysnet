import { Module } from '@nestjs/common'
import { EvidenceTypeService } from './evidence-type.service'
import { EvidenceTypeController } from './evidence-type.controller'
import { PrismaModule } from '@/prisma/prisma.module'
import { EvidenceTypeRepository } from './repository/evidence-type.repository'

@Module({
  imports: [PrismaModule],
  controllers: [EvidenceTypeController],
  providers: [EvidenceTypeService, EvidenceTypeRepository],
})
export class EvidenceTypeModule {}
