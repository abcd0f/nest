import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListEntity } from './entities/list.entity';

@Injectable()
export class ListService {
  @InjectRepository(ListEntity)
  private listRepository: Repository<ListEntity>;

  async create(createListDto: CreateListDto) {
    await this.listRepository.save(createListDto);
    return { code: 200, msg: '新增成功' };
  }

  async findAll() {
    const data = await this.listRepository.find();
    return { code: 200, msg: '成功', data };
  }

  async findOne(id: number) {
    const data = await this.listRepository.findOne({ where: { id } });
    return { code: 200, msg: '成功', data };
  }

  async update(id: number, updateListDto: UpdateListDto) {
    await this.listRepository.update(id, updateListDto);
    return { code: 200, msg: '更新成功' };
  }

  async remove(id: number) {
    await this.listRepository.delete(id);
    return { code: 200, msg: '删除成功' };
  }
}
