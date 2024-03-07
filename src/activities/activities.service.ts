import { Injectable, NotAcceptableException } from '@nestjs/common'
import { CreateActivityDto } from './dto/create-activity.dto'
import { UpdateActivityDto } from './dto/update-activity.dto'
import { ActivityRepository } from './repository/activities.repository'

@Injectable()
export class ActivitiesService {
  private readonly repository: ActivityRepository

  create(createActivityDto: CreateActivityDto) {
    return this.repository.create(createActivityDto)
  }

  findAll() {
    return this.repository.findAll()
  }

  async findOne(id: number) {
    const activity = await this.repository.findById(id)

    if (!activity) {
      throw new NotAcceptableException(`Activity ${id} not found`)
    }

    return activity
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
