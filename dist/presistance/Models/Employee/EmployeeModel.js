"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModel = exports.EmployeeInitializer = void 0;
const constants_1 = require("../../../utils/constants");
const mongoose_1 = require("mongoose");
class EmployeeInitializer {
    static init() {
        this.EmployeeSchema = new mongoose_1.Schema({
            id: {
                type: Number,
            },
            name: {
                type: String,
            },
            group: {
                type: String,
                enum: constants_1.EmployeeGroupEnum,
            },
            email: {
                type: String
            }
        }, {
            timestamps: true,
            toJSON: {
                transform(doc, ret) {
                    ret.id = ret._id;
                    delete ret._id;
                    delete ret.__v;
                },
            },
        });
    }
}
exports.EmployeeInitializer = EmployeeInitializer;
EmployeeInitializer.init();
const EmployeeModel = (0, mongoose_1.model)('Employee', EmployeeInitializer.EmployeeSchema);
exports.EmployeeModel = EmployeeModel;
//# sourceMappingURL=EmployeeModel.js.map