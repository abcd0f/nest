import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  console.log(
    `3000 🚀\n哦吼，启动成功了哦！🚀\n启动成功，点击访问 http://localhost:3000 🚀`,
  );
}
bootstrap();
