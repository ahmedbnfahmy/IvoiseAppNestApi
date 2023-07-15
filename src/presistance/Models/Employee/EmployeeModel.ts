import { EmployeeGroupEnum } from "../../../utils/constants";
import { model, Schema } from 'mongoose';
import Employee from '../../../Domain/Employee/Employee'


export class EmployeeInitializer {
  public static EmployeeSchema;
  public static init() {
    this.EmployeeSchema = new Schema(
      {
        id: {
          type: Number,
        },
        name:{
            type:String,
        },
        group: {
          type: String,
          enum: EmployeeGroupEnum,
        },
        email:{
          type:String
        } 
      },
      {
        timestamps: true,
        toJSON: {
          transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
          },
        },
      },
    );
  }
}

EmployeeInitializer.init();

const EmployeeModel = model<Employee>('Employee', EmployeeInitializer.EmployeeSchema);

export { EmployeeModel };