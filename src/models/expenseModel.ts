import mongoose, { mongo } from "mongoose";
import { ExpenseInterface } from "./interfaces";

const ExpenseSchema = new mongoose.Schema<ExpenseInterface>({
    amount: {
        type: Number
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ExpenseCategory"
    },
    budget: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Budget"
    },
    description: {
        type: String
    },
    recurring: {
        isRecurring: {type: Boolean, default: false},
        recurEvery: {type: Date}
    },
    receiptImage: {
        type: String
    }
}, 
{ timestamps: true }
)

export default mongoose.model<ExpenseInterface>("Expense", ExpenseSchema)