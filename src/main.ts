import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DBConnection } from './presistance/database/databaseConnection/localDbSync';
import { config } from 'dotenv';
async function bootstrap() {
  config();
  DBConnection()
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}
bootstrap();
