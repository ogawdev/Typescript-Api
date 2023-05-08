import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    authencation: {
        password: { type: String, required: true, select: false },
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false },
    },
});

export const User = mongoose.model("User", userSchema);

export const getUsers = () => User.find()
export const getUserByEmail = (email: string) => User.findOne({ email })
export const getUserById = (id: string) => User.findById(id)
export const getUserBySession = (sessionToken: string) => User.findOne({ "authencation.sessionToken": sessionToken })
export const createUser = (values: Record<string, any>) => new User(values).save().then((user) => user.toObject)
export const deleteUser = (id: string) => User.findByIdAndDelete({ _id: id })



