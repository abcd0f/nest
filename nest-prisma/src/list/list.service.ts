import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';

import { PrismaService } from 'db/prisma.service';

@Injectable()
export class ListService {
  constructor(private prisma: PrismaService) {}
  async create(createListDto: CreateListDto) {
    const data = await this.prisma.list.create({
      data: createListDto,
    });

    return {
      code: 200,
      msg: '添加成功',
    };
  }

  findAll() {
    return `This action returns all list`;
  }

  findOne(id: number) {
    return `This action returns a #${id} list`;
  }

  update(id: number, updateListDto: UpdateListDto) {
    return `This action updates a #${id} list`;
  }

  remove(id: number) {
    return `This action removes a #${id} list`;
  }
}
