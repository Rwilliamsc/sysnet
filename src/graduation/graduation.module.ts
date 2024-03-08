import { Module } from '@nestjs/common'
import { GraduationService } from './graduation.service'
import { GraduationController } from './graduation.controller'
import { PrismaService } from 'src/prisma/prisma.service'
import { GraduationRepository } from './repository/graduation.repository'

@Module({
  controllers: [GraduationController],
  providers: [GraduationService, PrismaService, GraduationRepository],
})
export class GraduationModule {}
