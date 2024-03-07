import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard'
import { PrismaModule } from './prisma/prisma.module'
import { UserModule } from './user/user.module'
import { ActivitiesModule } from './activities/activities.module'
import { GraduationModule } from './graduation/graduation.module'
import { QuarterModule } from './quarter/quarter.module';
import { ActivityTypeModule } from './activity-type/activity-type.module';
import { EvidenceTypeModule } from './evidence-type/evidence-type.module';

@Module({
  imports: [
    ActivitiesModule,
    PrismaModule,
    UserModule,
    AuthModule,
    GraduationModule,
    QuarterModule,
    ActivityTypeModule,
    EvidenceTypeModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
