import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export default class EditEmployeeDtoParam { 
  
  @ApiProperty({
    description: 'Employee identifier',
    example: '1',
  })
  @IsInt()
  @Type(() => Number)
  id: number;
}
