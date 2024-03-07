import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateActivityTypeDto } from './dto/create-activity-type.dto'
import { UpdateActivityTypeDto } from './dto/update-activity-type.dto'
import { PrismaService } from '@/prisma/prisma.service'
import { ActivityTypeRepository } from './repository/activity-type.repository'

@Injectable()
export class ActivityTypeService {
  private readonly repository: ActivityTypeRepository

  create(createActivityTypeDto: CreateActivityTypeDto) {
    return this.repository.create(createActivityTypeDto)
  }

  findAll() {
    return this.repository.findAll()
  }

  findOne(id: number) {
    return this.repository.findOne(id)
  }

  update(id: number, updateActivityTypeDto: UpdateActivityTypeDto) {
    const activityType = this.repository.findOne(id)

    if (!activityType) {
      throw new NotFoundException(`Activity type ${id} not found`)
    }
    return this.repository.update(id, updateActivityTypeDto)
  }

  remove(id: number) {
    const activityType = this.repository.findOne(id)

    if (!activityType) {
      throw new NotFoundException(`Activity type ${id} not found`)
    }

    return this.repository.delete(id)
  }
}
