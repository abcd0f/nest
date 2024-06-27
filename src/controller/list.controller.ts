import { Controller, Get, Param } from '@nestjs/common';
import { ListService } from '../services/list.service';

@Controller('list')
export class ListController {
  constructor(private readonly ListService: ListService) {}

  @Get(':id')
  getHello(@Param('id') id: number): string {
    console.log(id);

    return this.ListService.getHello();
  }
}
