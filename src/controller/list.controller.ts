import { Controller, Get, Ip, Param } from '@nestjs/common';
import { ListService } from '../services/list.service';

@Controller('list')
export class ListController {
  constructor(private readonly ListService: ListService) {}

  @Get(':id')
  getHello(@Param('id') id: number, @Ip() ip: string): string {
    console.log(id);
    console.log(ip, '11111111');

    return this.ListService.getHello();
  }
}
