import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';

import { PrismaService } from 'db/prisma.service';

@Injectable()
export class ListService {
  constructor(private prisma: PrismaService) {}
  async create(createListDto: CreateListDto) {
    await this.prisma.list.create({
      data: createListDto,
    });

    return {
      code: 200,
      msg: '添加成功',
    };
  }

  async findAll() {
    const data = await this.prisma.list.findMany();
    return {
      code: 200,
      msg: '查询成功',
      data,
    };
  }

  async findOne(id: number) {
    const data = await this.prisma.list.findUnique({
      where: {
        id,
      },
    });
    return {
      code: 200,
      msg: '查询成功',
      data,
    };
  }

  async update(id: number, updateListDto: UpdateListDto) {
    const data = await this.prisma.list.update({
      where: {
        id,
      },
      data: updateListDto,
    });

    return {
      code: 200,
      msg: '更新成功',
      data,
    };
  }

  async remove(id: number) {
    await this.prisma.list.delete({
      where: {
        id,
      },
    });
    return {
      code: 200,
      msg: '删除成功',
    };
  }
}
