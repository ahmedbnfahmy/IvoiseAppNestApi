import { Module } from '@nestjs/common';
import IEmployeeRepo from '../../../../Application/Interfaces/employee/IEmployeeRepo'
import EmployeeRepo from './EmployeeRepo.service';

@Module({
  providers: [{ provide: IEmployeeRepo, useClass: EmployeeRepo }],
  exports: [IEmployeeRepo],
})
export class AreaRepoModule {}
