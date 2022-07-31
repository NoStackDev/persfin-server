import mongoose, { Mongoose } from "mongoose";
import { ExpenseCategoryInterface } from "./interfaces";

const ExpenseCategorySchema = new mongoose.Schema<ExpenseCategoryInterface>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, {timestamps: true})

export default mongoose.model<ExpenseCategoryInterface>("ExpenseCategory", ExpenseCategorySchema)