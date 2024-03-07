import { Module } from '@nestjs/common'
import { EvidenceTypeService } from './evidence-type.service'
import { EvidenceTypeController } from './evidence-type.controller'
import { PrismaModule } from '@/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  controllers: [EvidenceTypeController],
  providers: [EvidenceTypeService],
})
export class EvidenceTypeModule {}
