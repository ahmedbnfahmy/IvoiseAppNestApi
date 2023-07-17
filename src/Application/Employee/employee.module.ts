import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { EmployeeController } from 'src/Api/employee/employee.controller';
import AddEmployeeCommand from './AddEmployeeCommand/AddEmployeeCommand.service';
import IEmployeeRepo from '../Interfaces/employee/IEmployeeRepo'
import EmployeeRepo from '../../presistance/mongo/mongoRepos/employee/EmployeeRepo.service';
@Module({
    imports:[],
    providers: [
        AddEmployeeCommand,
        // EditEmployeeCommand,
        { provide: IEmployeeRepo, useClass: EmployeeRepo },
      ],
      exports: [AddEmployeeCommand, 
        // EditEmployeeCommand
    ],
})
export class EmployeeModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply()
        .exclude(
            { path: '/api/employee', method: RequestMethod.GET },)
            .forRoutes(EmployeeController)
      }
}
