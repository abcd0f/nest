import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('list')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getHello(@Param('id') id: number): string {
    console.log(id);

    return this.appService.getHello();
  }
}
