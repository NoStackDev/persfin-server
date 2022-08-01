import mongoose, { Mongoose } from "mongoose";
import { IncomeCategoryInterface } from "./interfaces";

const IncomeCategorySchema = new mongoose.Schema<IncomeCategoryInterface>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

export default mongoose.model<IncomeCategoryInterface>("IncomeCategory", IncomeCategorySchema)