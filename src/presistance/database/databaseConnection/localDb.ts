import mongoose from 'mongoose';

export default abstract class Db {
  
  public static mongoose = mongoose.connect('mongodb://127.0.0.1:27017');
}
