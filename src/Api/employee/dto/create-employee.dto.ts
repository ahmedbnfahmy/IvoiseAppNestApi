import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty, IsString, Validate, ValidationArguments, ValidatorConstraint, 
    ValidatorConstraintInterface } from "class-validator";
import { EmployeeGroupEnum } from "src/utils/constants";
import {EmployeeModel} from '../../../presistance/Models/Employee/EmployeeModel'

    @ValidatorConstraint()
    export class IsUniqueEmployeeName implements ValidatorConstraintInterface {
      public async validate(name: string, args: ValidationArguments) {
        const area = await EmployeeModel.findOne({ where: { name, deletedAt: null } });
        return area ? false : true;
      }
    }
    @ValidatorConstraint()
    export class IsUniqueEmployeeEmail implements ValidatorConstraintInterface {
      public async validate(email: string, args: ValidationArguments) {
        const area = await EmployeeModel.findOne({ where: { email, deletedAt: null } });
        return area ? false : true;
      }
    }
export class CreateEmployeeDto {
    @ApiProperty({
        description: 'Employee name',
        example: 'Ahmed fahmy',
      })
      @IsString()
      @IsNotEmpty()
      @Validate(IsUniqueEmployeeName, { message: 'This area name already exist' })
      name: string;

      @ApiProperty({
        description: 'Employee name',
        example: 'Ahmed fahmy',
      })
      @IsString()
      @IsNotEmpty()
      @Validate(IsUniqueEmployeeEmail, { message: 'This area name already exist' })
      email: string;


    @ApiProperty({
        description: 'employee type',
        example: 'HR | Employee',
      })
      @IsIn(Object.values(EmployeeGroupEnum))
      group: string;
}
