import { ApiProperty } from '@nestjs/swagger';
import { CreateEmployeeDto } from './create-employee.dto';
import { EmployeeGroupEnum } from '../../../utils/constants'
import { IsIn } from 'class-validator';
export class UpdateEmployeeDto{

    @ApiProperty({
        description: 'employee type',
        example: 'HR | Employee',
      })
      @IsIn(Object.values(EmployeeGroupEnum))
      group: string;
    
}
