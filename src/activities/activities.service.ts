import { Injectable, NotAcceptableException } from '@nestjs/common'
import { CreateActivityDto } from './dto/create-activity.dto'
import { UpdateActivityDto } from './dto/update-activity.dto'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class ActivitiesService {
  private readonly prisma: PrismaService
  create(createActivityDto: CreateActivityDto) {
    return this.prisma.activity.create({ data: createActivityDto })
  }

  findAll() {
    return this.prisma.activity.findMany()
  }

  findOne(id: number) {
    const activity = this.prisma.activity.findUnique({ where: { id } })

    if (!activity) {
      throw new NotAcceptableException(`Activity ${id} not found`)
    }

    return activity
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return this.prisma.activity.update({
      where: { id },
      data: updateActivityDto,
    })
  }

  remove(id: number) {
    const activity = this.prisma.activity.findUnique({ where: { id } })

    if (!activity) {
      throw new NotAcceptableException(`Activity ${id} not found`)
    }

    return this.prisma.activity.delete({ where: { id } })
  }
}
