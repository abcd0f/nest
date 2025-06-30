// src/database/database.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import * as mysql from 'mysql2/promise';
import dbConfig from './database.config';

@Injectable()
export class DbService implements OnModuleInit, OnModuleDestroy {
  private pool: mysql.Pool;

  async onModuleInit() {
    this.pool = mysql.createPool(dbConfig);
    console.log('Database connection pool created');
  }

  async query(sql: string, values?: any[]) {
    let connection:any;
    try {
      connection = await this.pool.getConnection();
      const [results] = await connection.execute(sql, values);
      return results;
    } catch (error) {
      console.error('Query error:', error);
      throw error; // 可以根据需要进一步处理错误
    } finally {
      if (connection) {
        connection.release(); // 释放连接回池
      }
    }
  }

  async onModuleDestroy() {
    if (this.pool) {
      await this.pool.end(); // 关闭连接池
      console.log('Database connection pool closed');
    }
  }
}
