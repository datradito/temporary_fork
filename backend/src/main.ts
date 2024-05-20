import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';
import 'dotenv/config';

console.log('Starting the application...');

async function bootstrap() {
  console.log('Starting the application...');
  console.log('Port:', process.env.PORT);
  const app = await NestFactory.create(AppModule);
  // Enable CORS
  app.use(
    cors({
      origin: 'http://localhost:3000', // TODO: Change this to deployed frontend URL
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    }),
  );
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 8001);
}
bootstrap();
