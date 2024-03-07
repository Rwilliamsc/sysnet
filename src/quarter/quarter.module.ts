import { Module } from '@nestjs/common'
import { QuarterService } from './quarter.service'
import { QuarterController } from './quarter.controller'
import { PrismaModule } from '@/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  controllers: [QuarterController],
  providers: [QuarterService],
})
export class QuarterModule {}
