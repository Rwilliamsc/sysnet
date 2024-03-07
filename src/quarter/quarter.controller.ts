import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { QuarterService } from './quarter.service'
import { CreateQuarterDto } from './dto/create-quarter.dto'
import { UpdateQuarterDto } from './dto/update-quarter.dto'

@Controller('quarter')
export class QuarterController {
  constructor(private readonly quarterService: QuarterService) {}

  @Post()
  create(@Body() createQuarterDto: CreateQuarterDto) {
    return this.quarterService.create(createQuarterDto)
  }

  @Get()
  findAll() {
    return this.quarterService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.quarterService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateQuarterDto: UpdateQuarterDto) {
    return this.quarterService.update(+id, updateQuarterDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.quarterService.remove(+id)
  }
}
