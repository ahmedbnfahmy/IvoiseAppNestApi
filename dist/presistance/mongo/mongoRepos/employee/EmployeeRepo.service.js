"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmployeeModel_1 = require("../../../Models/Employee/EmployeeModel");
class EmployeeRepo {
    getById(id) {
        throw new Error('Method not implemented.');
    }
    async update(id, updatedItem) {
        await EmployeeModel_1.EmployeeModel.updateOne({ where: { id } }, updatedItem);
        return await EmployeeModel_1.EmployeeModel.findById(id);
    }
    delete(id) {
        throw new Error('Method not implemented.');
    }
    async create(employee) {
        return EmployeeModel_1.EmployeeModel.create(employee);
    }
    async getByName(name) {
        return await EmployeeModel_1.EmployeeModel.findOne({ where: { name } });
    }
}
exports.default = EmployeeRepo;
//# sourceMappingURL=EmployeeRepo.service.js.map