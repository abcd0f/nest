import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { DbService } from 'config/database.service';

@Injectable()
export class ListService {
  constructor(private db: DbService) {}
  create(createListDto: CreateListDto) {
    const sql = `insert into list (title,description) values (?,?)`;
    const data = this.db.query(sql, [
      createListDto.title,
      createListDto.description,
    ]);
    return data;
  }

  findAll() {
    const sql = `select * from list`;
    const data = this.db.query(sql);
    return data;
  }

  findOne(id: number) {
    const sql = `select * from list where id = ?`;
    const data = this.db.query(sql, [id]);
    return data;
  }

  update(id: number, updateListDto: UpdateListDto) {
    const sql = `update list set title = ?, description = ? where id = ?`;
    const data = this.db.query(sql, [
      updateListDto.title,
      updateListDto.description,
      id,
    ]);
  }

  remove(id: number) {
    const sql = `delete from list where id = ?`;
    const data = this.db.query(sql, [id]);
    return data;
  }
}
