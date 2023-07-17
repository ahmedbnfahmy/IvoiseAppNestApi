import { EmployeeGroupEnum } from "src/utils/constants";

export default interface Employee {
    id: number,
    name?: string,
    email?: string,
    group:EmployeeGroupEnum,
    deletedAt?: Date,
    createdAt?:Date;
  }
 
