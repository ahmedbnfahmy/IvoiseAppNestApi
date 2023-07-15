import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export default class EditEmployeeDtoParam { 
  
  @ApiProperty({
    description: 'Employee identifier',
    example: '1',
  })
  
  id: number;
}
