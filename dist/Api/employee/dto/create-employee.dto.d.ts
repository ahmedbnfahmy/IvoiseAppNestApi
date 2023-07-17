import { ValidationArguments, ValidatorConstraintInterface } from "class-validator";
export declare class IsUniqueEmployeeName implements ValidatorConstraintInterface {
    validate(name: string, args: ValidationArguments): Promise<boolean>;
}
export declare class IsUniqueEmployeeEmail implements ValidatorConstraintInterface {
    validate(email: string, args: ValidationArguments): Promise<boolean>;
}
export declare class CreateEmployeeDto {
    name: string;
    email: string;
    group: string;
}
