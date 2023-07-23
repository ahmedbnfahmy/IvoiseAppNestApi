import { CreateEmployeeDto } from './dto/create-employee.dto';
import AddEmployeeCommand from 'src/Application/Employee/AddEmployeeCommand/AddEmployeeCommand.service';
export declare class EmployeeController {
    private readonly AddEmployeeCommand;
    constructor(AddEmployeeCommand: AddEmployeeCommand);
    create(createEmployeeDto: CreateEmployeeDto): Promise<import("../../Domain/Employee/Employee").default>;
    findAll(): string;
}
