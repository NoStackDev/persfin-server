import mongoose, { Mongoose } from "mongoose";
import { IncomeCategoryInterface } from "./interfaces";

const IncomeCategorySchema = new mongoose.Schema<IncomeCategoryInterface>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, {timestamps: true})

export default mongoose.model<IncomeCategoryInterface>("IncomeCategory", IncomeCategorySchema)