import { Module } from '@nestjs/common'
import { ActivitiesService } from './activities.service'
import { ActivitiesController } from './activities.controller'
import { PrismaModule } from '@/prisma/prisma.module'
import { ActivityRepository } from './repository/activities.repository'

@Module({
  imports: [PrismaModule],
  controllers: [ActivitiesController],
  providers: [ActivitiesService, ActivityRepository],
})
export class ActivitiesModule {}
