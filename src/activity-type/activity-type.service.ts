import { Injectable } from '@nestjs/common'
import { CreateActivityTypeDto } from './dto/create-activity-type.dto'
import { UpdateActivityTypeDto } from './dto/update-activity-type.dto'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class ActivityTypeService {
  private readonly prisma: PrismaService

  create(createActivityTypeDto: CreateActivityTypeDto) {
    return this.prisma.activityType.create({ data: createActivityTypeDto })
  }

  findAll() {
    return this.prisma.activityType.findMany()
  }

  findOne(id: number) {
    return this.prisma.activityType.findUnique({ where: { id } })
  }

  update(id: number, updateActivityTypeDto: UpdateActivityTypeDto) {
    return this.prisma.activityType.update({
      where: { id },
      data: updateActivityTypeDto,
    })
  }

  remove(id: number) {
    return this.prisma.activityType.delete({ where: { id } })
  }
}
