import { Schema, model } from "mongoose";

export interface IUser {
    _id?: string;
    username: string;
    psssword: string;
    availableMoney: number;
    // purchasedItems: string[];
}

const UserSchema = new Schema<IUser>({
    username: {type: String, required: true, unique: true},
    psssword: {type: String, required: true},
    availableMoney: {type: Number, default: 5000},
})

//accessing the collection (user)
export const UserModel = model<IUser>("user", UserSchema)