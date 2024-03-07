import { Module } from '@nestjs/common'
import { GraduationService } from './graduation.service'
import { GraduationController } from './graduation.controller'
import { PrismaModule } from '@/prisma/prisma.module'
import { GraduationRepository } from './repository/graduation.repository'

@Module({
  imports: [PrismaModule],
  controllers: [GraduationController],
  providers: [GraduationService, GraduationRepository],
})
export class GraduationModule {}
