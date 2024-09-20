import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../db/prisma.module';

import { ListModule } from './list/list.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
