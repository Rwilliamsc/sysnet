import { Module } from '@nestjs/common'
import { QuarterService } from './quarter.service'
import { QuarterController } from './quarter.controller'
import { PrismaModule } from '@/prisma/prisma.module'
import { QuarterRepository } from './repository/quarter.repository'

@Module({
  imports: [PrismaModule],
  controllers: [QuarterController],
  providers: [QuarterService, QuarterRepository],
})
export class QuarterModule {}
