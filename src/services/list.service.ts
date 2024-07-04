import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateItemDto } from '../dto/list.dto';

const prisma = new PrismaClient();

@Injectable()
export class ListService {
  async createItem(val: CreateItemDto) {
    await prisma.userList.create({
      data: {
        title: val.title,
        content: val.content,
      },
    });
    return {
      code: 200,
      msg: '创建成功',
    };
  }
  async getList() {
    const list = await prisma.userList.findMany();
    return list;
  }

  async getItem(id) {
    const data = await prisma.userList.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    return data;
  }
}
