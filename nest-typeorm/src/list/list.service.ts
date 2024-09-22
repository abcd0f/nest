import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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
    return;
  }

  async findAll() {
    const data = await this.listRepository.find();
    return data;
  }

  async findOne(id: number) {
    const data = await this.listRepository.findOne({ where: { id } });
    if (!data) throw new HttpException('没有找到该数据', HttpStatus.NOT_FOUND);
    return data;
  }

  async update(id: number, updateListDto: UpdateListDto) {
    const data = await this.listRepository.findOne({ where: { id } });
    if (!data) throw new HttpException('没有找到该数据', HttpStatus.NOT_FOUND);

    await this.listRepository.update(id, updateListDto);
    return;
  }

  async remove(id: number) {
    const data = await this.listRepository.findOne({ where: { id } });
    if (!data) throw new HttpException('没有找到该数据', HttpStatus.NOT_FOUND);

    await this.listRepository.delete(id);
    return;
  }
}
