import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DbServiceModule } from 'config/databse.module';

import { ListModule } from './list/list.module';

@Module({
  imports: [
    DbServiceModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
