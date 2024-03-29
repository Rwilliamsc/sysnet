import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { ActivitiesService } from './activities.service'
import { CreateActivityDto } from './dto/create-activity.dto'
import { UpdateActivityDto } from './dto/update-activity.dto'

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Post()
  create(@Body() createActivityDto: CreateActivityDto) {
    return this.activitiesService.create(createActivityDto)
  }

  @Get()
  findAll() {
    return this.activitiesService.findAll()
  }

  @Get(':status')
  findAllPending(@Param('status') status: string) {
    return this.activitiesService.findAllStatus(status)
  }

  @Get('byuser/:userId')
  findByUserId(@Param('userId') userId: number) {
    return this.activitiesService.findByUserId(+userId)
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.activitiesService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateActivityDto: UpdateActivityDto,
  ) {
    return this.activitiesService.update(+id, updateActivityDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.activitiesService.remove(+id)
  }
}
