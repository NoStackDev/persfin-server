import mongoose from "mongoose";
import { UserInterface } from "./interfaces";


const UserSchema = new mongoose.Schema<UserInterface>({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true
    },
    othernames: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    }, 
    password: {
        type: String,
        required: true
    }
}, {timestamps: true})


export default mongoose.model<UserInterface>('User', UserSchema)