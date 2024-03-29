import { Injectable, NotAcceptableException } from '@nestjs/common'
import { CreateActivityDto } from './dto/create-activity.dto'
import { UpdateActivityDto } from './dto/update-activity.dto'
import { ActivityRepository } from './repository/activities.repository'

@Injectable()
export class ActivitiesService {
  constructor(private readonly repository: ActivityRepository) {}

  create(createActivityDto: CreateActivityDto) {
    return this.repository.create(createActivityDto)
  }

  findAll() {
    return this.repository.findAll()
  }

  findAllStatus(status: string) {
    return this.repository.findAllStatus(status)
  }

  async findOne(id: number) {
    const activity = await this.repository.findById(id)

    if (!activity) {
      throw new NotAcceptableException(`Activity ${id} not found`)
    }

    return activity
  }

  findByUserId(userId: number) {
    return this.repository.findByUserId(userId)
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return this.repository.update(id, updateActivityDto)
  }

  async remove(id: number) {
    const activity = await this.repository.findById(id)

    if (!activity) {
      throw new NotAcceptableException(`Activity ${id} not found`)
    }

    return this.repository.delete(id)
  }
}
