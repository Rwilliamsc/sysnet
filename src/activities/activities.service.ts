import { Injectable, NotAcceptableException } from '@nestjs/common'
import { CreateActivityDto } from './dto/create-activity.dto'
import { UpdateActivityDto } from './dto/update-activity.dto'
import { ActivityRepository } from './repository/activities.repository'
import { EmailService } from './email/email.service'
import { UserService } from '@/user/user.service'

@Injectable()
export class ActivitiesService {
  constructor(
    private readonly repository: ActivityRepository,
    private readonly userService: UserService,
    private readonly emailService: EmailService,
  ) {}

  async create(createActivityDto: CreateActivityDto) {
    try {
      const newActivity = await this.repository.create(createActivityDto)
      const message = `Você criou uma nova atividade: ${newActivity.description}. A atividade está pendente de aprovação`
      const user = await this.userService.findOne(newActivity.userId)
      console.log('user', user)

      await this.emailService.sendEmail(user.email, message)
      return newActivity
    } catch (error) {
      throw new NotAcceptableException(error.message)
    }
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
