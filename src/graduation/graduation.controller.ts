import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { GraduationService } from './graduation.service'
import { CreateGraduationDto } from './dto/create-graduation.dto'
import { UpdateGraduationDto } from './dto/update-graduation.dto'
import { IsPublic } from '@/auth/decorators/is-public.decorator'

@Controller('graduation')
export class GraduationController {
  constructor(private readonly graduationService: GraduationService) {}

  @IsPublic()
  @Post()
  create(@Body() createGraduationDto: CreateGraduationDto) {
    return this.graduationService.create(createGraduationDto)
  }

  @IsPublic()
  @Get()
  findAll() {
    return this.graduationService.findAll()
  }

  @IsPublic()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.graduationService.findOne(+id)
  }

  @IsPublic()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGraduationDto: UpdateGraduationDto,
  ) {
    return this.graduationService.update(+id, updateGraduationDto)
  }

  @IsPublic()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.graduationService.remove(+id)
  }
}
