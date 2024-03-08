import { Module } from '@nestjs/common'
import { ActivitiesService } from './activities.service'
import { ActivitiesController } from './activities.controller'
import { PrismaService } from 'src/prisma/prisma.service'
import { ActivityRepository } from './repository/activities.repository'

@Module({
  controllers: [ActivitiesController],
  providers: [ActivitiesService, PrismaService, ActivityRepository],
})
export class ActivitiesModule {}
