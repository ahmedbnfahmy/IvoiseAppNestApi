import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { EmployeeController } from 'src/Api/employee/employee.controller';

@Module({
    imports:[]
})
export class EmployeeModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply()
        .exclude(
            { path: '/api/employee', method: RequestMethod.GET },)
            .forRoutes(EmployeeController)
      }
}
