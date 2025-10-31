import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(envs.port ?? 3000);
}
bootstrap();
