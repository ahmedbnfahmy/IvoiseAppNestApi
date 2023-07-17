"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmployeeDto = exports.IsUniqueEmployeeEmail = exports.IsUniqueEmployeeName = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const constants_1 = require("../../../utils/constants");
const EmployeeModel_1 = require("../../../presistance/Models/Employee/EmployeeModel");
let IsUniqueEmployeeName = exports.IsUniqueEmployeeName = class IsUniqueEmployeeName {
    async validate(name, args) {
        const area = await EmployeeModel_1.EmployeeModel.findOne({ where: { name, deletedAt: null } });
        return area ? false : true;
    }
};
exports.IsUniqueEmployeeName = IsUniqueEmployeeName = __decorate([
    (0, class_validator_1.ValidatorConstraint)()
], IsUniqueEmployeeName);
let IsUniqueEmployeeEmail = exports.IsUniqueEmployeeEmail = class IsUniqueEmployeeEmail {
    async validate(email, args) {
        const area = await EmployeeModel_1.EmployeeModel.findOne({ where: { email, deletedAt: null } });
        return area ? false : true;
    }
};
exports.IsUniqueEmployeeEmail = IsUniqueEmployeeEmail = __decorate([
    (0, class_validator_1.ValidatorConstraint)()
], IsUniqueEmployeeEmail);
class CreateEmployeeDto {
}
exports.CreateEmployeeDto = CreateEmployeeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Employee name',
        example: 'Ahmed fahmy',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(IsUniqueEmployeeName, { message: 'This area name already exist' }),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Employee name',
        example: 'Ahmed fahmy',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(IsUniqueEmployeeEmail, { message: 'This area name already exist' }),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'employee type',
        example: 'HR | Employee',
    }),
    (0, class_validator_1.IsIn)(Object.values(constants_1.EmployeeGroupEnum)),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "group", void 0);
//# sourceMappingURL=create-employee.dto.js.map