import IAddEmployeeCommand from './IAddEmployeeCommand';
import IEmployeeRepo from 'src/Application/Interfaces/employee/IEmployeeRepo';
import Employee from 'src/Domain/Employee/Employee';
import { CreateEmployeeDto } from 'src/Api/employee/dto/create-employee.dto';
export default class AddEmployeeCommand implements IAddEmployeeCommand {
    private employeeRepo;
    constructor(employeeRepo: IEmployeeRepo);
    execute(addEmployeeDto: CreateEmployeeDto): Promise<Employee>;
}
