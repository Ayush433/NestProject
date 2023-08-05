import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { configDotenv } from 'dotenv';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();
