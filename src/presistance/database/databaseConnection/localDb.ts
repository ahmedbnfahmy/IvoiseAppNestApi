import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import {config}  from 'dotenv';

config()
console.log(process.env.LOCAL_MONGOOSE_URI);
export default abstract class Db {
  public static mongoose= mongoose.connect(process.env.LOCAL_MONGOOSE_URI)
}
