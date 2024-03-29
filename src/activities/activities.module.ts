import { Module } from '@nestjs/common'
import { ActivitiesService } from './activities.service'
import { ActivitiesController } from './activities.controller'
import { PrismaService } from 'src/prisma/prisma.service'
import { ActivityRepository } from './repository/activities.repository'
import { EmailService } from './email/email.service'
import { UserModule } from '@/user/user.module'

@Module({
  imports: [UserModule],
  controllers: [ActivitiesController],
  providers: [
    ActivitiesService,
    PrismaService,
    ActivityRepository,
    EmailService,
  ],
})
export class ActivitiesModule {}
