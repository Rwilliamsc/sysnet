import { Module } from '@nestjs/common'
import { ActivityTypeService } from './activity-type.service'
import { ActivityTypeController } from './activity-type.controller'
import { PrismaModule } from '@/prisma/prisma.module'
import { ActivityTypeRpository } from './repository/activity-type.repository'

@Module({
  imports: [PrismaModule],
  controllers: [ActivityTypeController],
  providers: [ActivityTypeService, ActivityTypeRpository],
})
export class ActivityTypeModule {}
