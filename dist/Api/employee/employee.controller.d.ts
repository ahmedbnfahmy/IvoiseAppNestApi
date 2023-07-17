import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    create(createEmployeeDto: CreateEmployeeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto): string;
    remove(id: string): string;
}
