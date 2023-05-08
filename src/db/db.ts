import * as mongoose from "mongoose";

export class DB {
    private static _instance: DB = new DB();

    private constructor() {
        mongoose.connect("mongodb://localhost:27017/typescript_api");
    }

    public static get Instance() {
        return this._instance;
    }

    public getMongoose() {
        return mongoose;
    }
}