import IEmployeeRepo from '../../../../Application/Interfaces/employee/IEmployeeRepo';
import Employee from 'src/Domain/Employee/Employee';
export default class EmployeeRepo implements IEmployeeRepo {
    getById(id: string | number): Promise<Employee>;
    update(id: string | number, updatedItem: Employee): Promise<Employee>;
    delete(id: string | number): Promise<void>;
    create(employee: Employee): Promise<Employee>;
    getByName(name: string): Promise<Employee>;
}
