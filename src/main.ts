import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DBConnection } from './presistance/database/databaseConnection/localDbSync';
import { config } from 'dotenv';
config();
async function bootstrap() {
  DBConnection()
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}
bootstrap();
