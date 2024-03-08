import { Module } from '@nestjs/common'
import { ActivityTypeService } from './activity-type.service'
import { ActivityTypeController } from './activity-type.controller'

import { ActivityTypeRepository } from './repository/activity-type.repository'
import { PrismaService } from 'src/prisma/prisma.service'

@Module({
  controllers: [ActivityTypeController],
  providers: [ActivityTypeService, PrismaService, ActivityTypeRepository],
})
export class ActivityTypeModule {}
