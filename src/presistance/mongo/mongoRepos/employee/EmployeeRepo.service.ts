
import IEmployeeRepo from '../../../../Application/Interfaces/employee/IEmployeeRepo'
import { EmployeeModel } from 'src/presistance/Models/Employee/EmployeeModel';
import Employee from 'src/Domain/Employee/Employee';


export default class EmployeeRepo implements IEmployeeRepo {
  getById(id: string | number): Promise<Employee> {
    throw new Error('Method not implemented.');
  }
  async update(id: string | number, updatedItem: Employee): Promise<Employee> {
    await EmployeeModel.updateOne( { where: { id }},updatedItem);
    return await EmployeeModel.findById(id);
  }
  delete(id: string | number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async create(employee: Employee): Promise<Employee> {
    return EmployeeModel.create(employee);
  }
  async getByName(name: string): Promise<Employee> {
    return await EmployeeModel.findOne({ where: { name } });
  }
}
