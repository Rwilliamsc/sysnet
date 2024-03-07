import { PrismaService } from '@/prisma/prisma.service'
import { ActivityType } from '../entities/activity-type.entity'
import { CreateActivityTypeDto } from '../dto/create-activity-type.dto'
import { UpdateActivityTypeDto } from '../dto/update-activity-type.dto'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ActivityTypeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateActivityTypeDto): Promise<ActivityType> {
    return this.prisma.activityType.create({ data })
  }

  async findOne(id: number): Promise<ActivityType> {
    return this.prisma.activityType.findUnique({ where: { id } })
  }

  async findAll(): Promise<ActivityType[]> {
    return this.prisma.activityType.findMany()
  }

  async update(id: number, data: UpdateActivityTypeDto): Promise<ActivityType> {
    return this.prisma.activityType.update({ where: { id }, data })
  }

  async delete(id: number): Promise<ActivityType> {
    return this.prisma.activityType.delete({ where: { id } })
  }
}
