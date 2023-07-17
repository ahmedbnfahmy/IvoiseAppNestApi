import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import AddEmployeeCommand from 'src/Application/Employee/AddEmployeeCommand/AddEmployeeCommand.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly AddEmployeeCommand: AddEmployeeCommand) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.AddEmployeeCommand.execute(createEmployeeDto);
  }

  // @Get()
  // findAll() {
  //   return this.AddEmployeeCommand.execute
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.employeeService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
  //   return this.employeeService.update(+id, updateEmployeeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.employeeService.remove(+id);
  // }
}
