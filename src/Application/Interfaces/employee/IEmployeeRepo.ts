import Employee from "../../../Domain/Employee/Employee";
import IRepo from "../IRepo";

export default abstract class IEmployeeRepo extends IRepo<Employee> {}