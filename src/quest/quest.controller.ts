import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { QuestService } from './quest.service';
import { CreateQuestDto } from './dto/createQuest.dto';
import { UpdateQuestDto } from './dto/updateQuest.dto';

@Controller('quest')
export class QuestController {
  constructor(private readonly questService: QuestService) {}

  @Post()
  create(@Body() createQuestDto: CreateQuestDto) {
    return this.questService.create(createQuestDto);
  }

  @Get()
  findAll() {
    return this.questService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateQuestDto: UpdateQuestDto) {
    return this.questService.update(+id, updateQuestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questService.remove(+id);
  }
}
