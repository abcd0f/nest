import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ListService } from '../services/list.service';
import { CreateItemDto } from '../dto/list.dto';

@Controller('list')
export class ListController {
  constructor(private readonly ListService: ListService) {}

  @Post('create')
  create(@Body() CreateItemDto: CreateItemDto) {
    return this.ListService.createItem(CreateItemDto);
  }

  @Get()
  getList() {
    return this.ListService.getList();
  }

  @Get(':id')
  getItem(@Param('id') id) {
    return this.ListService.getItem(id);
  }
}
