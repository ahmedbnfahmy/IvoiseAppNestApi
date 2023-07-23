import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './Application/Employee/employee.module';
import { EmployeeController } from './Api/employee/employee.controller';
import { config } from 'dotenv';

@Module({
  imports: [EmployeeModule],
  controllers: [AppController,EmployeeController],
  providers: [AppService],
})
export class AppModule {}
