import { Injectable } from '@nestjs/common';
import { CreateQuestDto } from './dto/createQuest.dto';
import { UpdateQuestDto } from './dto/updateQuest.dto';
import { QUESTS } from './quest.data';

@Injectable()
export class QuestService {
  quest = QUESTS;
  create(createQuestDto: CreateQuestDto) {
    return 'This action adds a new quest';
  }

  findAll() {
    return (this.quest);
  }

  findOne(id: number) {
    return `This action returns a quest ${id} `;
  }

  update(id: number, updateQuestDto: UpdateQuestDto) {
    return `This action updates a quest ${id} `;
  }

  remove(id: number) {
    return `This action removes a quest ${id} `;
  }
}
