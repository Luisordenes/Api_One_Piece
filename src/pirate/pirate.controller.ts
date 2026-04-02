import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PirateService } from './pirate.service';
import { CreatePirateDto } from './dto/create-pirate.dto';
import { UpdatePirateDto } from './dto/update-pirate.dto';

@Controller('pirate')
export class PirateController {
  constructor(private readonly pirateService: PirateService) {}

  @Post()
  create(@Body() createPirateDto: CreatePirateDto) {
    return this.pirateService.create(createPirateDto);
  }

  @Get()
  findAll() {
    return this.pirateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pirateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePirateDto: UpdatePirateDto) {
    return this.pirateService.update(+id, updatePirateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pirateService.remove(+id);
  }
}
