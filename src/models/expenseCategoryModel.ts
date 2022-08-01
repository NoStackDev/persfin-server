import mongoose, { Mongoose } from "mongoose";
import { ExpenseCategoryInterface } from "./interfaces";

const ExpenseCategorySchema = new mongoose.Schema<ExpenseCategoryInterface>({
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

export default mongoose.model<ExpenseCategoryInterface>("ExpenseCategory", ExpenseCategorySchema)