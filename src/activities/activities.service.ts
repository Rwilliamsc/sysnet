import { Injectable, NotAcceptableException } from '@nestjs/common'
import { CreateActivityDto } from './dto/create-activity.dto'
import { UpdateActivityDto } from './dto/update-activity.dto'
import { Activity } from './entities/activity.entity'
import { randomUUID } from 'crypto'

@Injectable()
export class ActivitiesService {
  private activities: Activity[] = []
  create(createActivityDto: CreateActivityDto) {
    const data: Activity = {
      ...createActivityDto,
      id: randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.activities.push(data)

    return data
  }

  findAll() {
    return this.activities
  }

  findOne(id: string) {
    const activity = this.activities.find(activity => activity.id === id)

    if (!activity) {
      throw new NotAcceptableException(`Activity ${id} not found`)
    }

    return activity
  }

  update(id: string, updateActivityDto: UpdateActivityDto) {
    const index = this.activities.findIndex(activity => activity.id === id)

    if (index === -1) {
      throw new NotAcceptableException(`Activity ${id} not found`)
    }

    const activity = this.activities[index]
    const updateActivity: Activity = {
      ...activity,
      ...updateActivityDto,
      updatedAt: new Date(),
    }

    this.activities[index] = updateActivity

    return updateActivity
  }

  remove(id: string) {
    const index = this.activities.findIndex(activity => activity.id === id)

    if (index === -1) {
      throw new NotAcceptableException(`Activity ${id} not found`)
    }

    this.activities.splice(index, 1)
  }
}
