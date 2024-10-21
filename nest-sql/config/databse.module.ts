import { Module, Global } from '@nestjs/common';
import { DbService } from './database.service';

@Global()
@Module({
  providers: [DbService],
  exports: [DbService],
})
export class DbServiceModule {}
