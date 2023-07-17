// import AddAreaDto from
import { CreateEmployeeDto } from 'src/Api/employee/dto/create-employee.dto';
import Employee from 'src/Domain/Employee/Employee';

export default interface IAddEmployeeCommand {
  execute(addEmployeeDto: CreateEmployeeDto): Promise<Employee>;
}
