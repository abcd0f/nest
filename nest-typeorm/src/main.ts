import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { setupCors } from 'utils/cors.utils';
import { CustomValidationPipe } from 'utils/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  // 设置 api 访问前缀
  const prefix = config.get<string>('API_PREFIX');
  const port = config.get<string>('APP_PORT');
  app.setGlobalPrefix(prefix);
  app.useGlobalPipes(new CustomValidationPipe());

  // cors
  setupCors(app);

  // IPv4
  await app.listen(port, '0.0.0.0');

  const url = await app.getUrl();
  console.log(`\n🟢 启动成功:\n   👉 ${url}\n`);
}
bootstrap();
