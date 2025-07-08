import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Main-Gateway');

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT ?? 3000);
  logger.log(`Main Gateway is running on port ${process.env.PORT ?? 3000}`);
}
bootstrap();
