import { Module } from '@nestjs/common'
import { ActivityTypeService } from './activity-type.service'
import { ActivityTypeController } from './activity-type.controller'
import { PrismaModule } from '@/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  controllers: [ActivityTypeController],
  providers: [ActivityTypeService],
})
export class ActivityTypeModule {}
