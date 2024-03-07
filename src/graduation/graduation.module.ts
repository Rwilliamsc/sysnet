import { Module } from '@nestjs/common'
import { GraduationService } from './graduation.service'
import { GraduationController } from './graduation.controller'
import { PrismaModule } from '@/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  controllers: [GraduationController],
  providers: [GraduationService],
})
export class GraduationModule {}
