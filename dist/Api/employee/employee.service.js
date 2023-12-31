"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
let EmployeeService = exports.EmployeeService = class EmployeeService {
    create(createEmployeeDto) {
        return 'This action adds a new employee';
    }
    findAll() {
        return `This action returns all employee`;
    }
    findOne(id) {
        return `This action returns a #${id} employee`;
    }
    update(id, updateEmployeeDto) {
        return `This action updates a #${id} employee`;
    }
    remove(id) {
        return `This action removes a #${id} employee`;
    }
};
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)()
], EmployeeService);
//# sourceMappingURL=employee.service.js.map