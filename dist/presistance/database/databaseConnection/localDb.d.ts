import mongoose from 'mongoose';
export default abstract class Db {
    static mongoose: Promise<typeof mongoose>;
}
