import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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
  }

  async findAll() {
    const data = await this.prisma.list.findMany();
    return data;
  }

  async findOne(id: number) {
    const data = await this.prisma.list.findUnique({ where: { id } });

    if (!data) throw new HttpException('没有找到该数据', HttpStatus.NOT_FOUND);
    return data;
  }

  async update(id: number, updateListDto: UpdateListDto) {
    const exists = await this.prisma.list.findUnique({ where: { id } });
    if (!exists)
      throw new HttpException('没有找到该数据', HttpStatus.NOT_FOUND);

    const data = await this.prisma.list.update({
      where: { id },
      data: updateListDto,
    });

    if (!data)
      throw new HttpException('修改失败', HttpStatus.INTERNAL_SERVER_ERROR);
    return data;
  }

  async remove(id: number) {
    const exists = await this.prisma.list.findUnique({ where: { id } });
    if (!exists)
      throw new HttpException('没有找到该数据', HttpStatus.NOT_FOUND);

    const data = await this.prisma.list.delete({ where: { id } });
    if (!data)
      throw new HttpException('删除失败', HttpStatus.INTERNAL_SERVER_ERROR);

    return data;
  }
}
