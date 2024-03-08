import { Module } from '@nestjs/common'
import { QuarterService } from './quarter.service'
import { QuarterController } from './quarter.controller'
import { PrismaService } from 'src/prisma/prisma.service'
import { QuarterRepository } from './repository/quarter.repository'

@Module({
  controllers: [QuarterController],
  providers: [QuarterService, PrismaService, QuarterRepository],
})
export class QuarterModule {}
