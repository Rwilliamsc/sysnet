import { PrismaService } from '@/prisma/prisma.service'
import { CreateActivityDto } from '../dto/create-activity.dto'
import { UpdateActivityDto } from '../dto/update-activity.dto'
import { Activity } from '../entities/activity.entity'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ActivityRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateActivityDto): Promise<Activity> {
    return this.prisma.activity.create({ data })
  }

  async findById(id: number): Promise<Activity> {
    return this.prisma.activity.findUnique({ where: { id } })
  }

  async findByUserId(userId: number): Promise<Activity[]> {
    return this.prisma.activity.findMany({ where: { userId: userId } })
  }

  async findAll(): Promise<Activity[]> {
    return this.prisma.activity.findMany()
  }

  async findAllStatus(status: string): Promise<Activity[]> {
    return this.prisma.activity.findMany({ where: { status } })
  }

  async update(id: number, data: UpdateActivityDto): Promise<Activity> {
    return this.prisma.activity.update({ where: { id }, data })
  }

  async delete(id: number): Promise<Activity> {
    return this.prisma.activity.delete({ where: { id } })
  }
}
