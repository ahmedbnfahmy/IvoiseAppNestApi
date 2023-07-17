import { Injectable } from '@nestjs/common';
import IAddEmployeeCommand from './IAddEmployeeCommand';
import  IEmployeeRepo  from 'src/Application/Interfaces/employee/IEmployeeRepo';
import Employee from 'src/Domain/Employee/Employee';
import { CreateEmployeeDto } from 'src/Api/employee/dto/create-employee.dto';

@Injectable()
export default class AddEmployeeCommand implements IAddEmployeeCommand{
  constructor(private employeeRepo: IEmployeeRepo) {}
  async execute(addEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    try {
      const employee = {
        // ...addEmployeeDto,
        name: addEmployeeDto.name,
        email:addEmployeeDto.email,
        // group:addEmployeeDto.group
      } as Employee;
      const addedEmployee = await this.employeeRepo.create(employee);
      return addedEmployee;
    } catch (error) {
      throw error;
    }
  }
}
