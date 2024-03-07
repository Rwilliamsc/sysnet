import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvidenceTypeService } from './evidence-type.service';
import { CreateEvidenceTypeDto } from './dto/create-evidence-type.dto';
import { UpdateEvidenceTypeDto } from './dto/update-evidence-type.dto';

@Controller('evidence-type')
export class EvidenceTypeController {
  constructor(private readonly evidenceTypeService: EvidenceTypeService) {}

  @Post()
  create(@Body() createEvidenceTypeDto: CreateEvidenceTypeDto) {
    return this.evidenceTypeService.create(createEvidenceTypeDto);
  }

  @Get()
  findAll() {
    return this.evidenceTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evidenceTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvidenceTypeDto: UpdateEvidenceTypeDto) {
    return this.evidenceTypeService.update(+id, updateEvidenceTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evidenceTypeService.remove(+id);
  }
}
