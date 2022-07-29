import mongoose from "mongoose";
const ExpenseSchema = new mongoose.Schema({
    amount: {
        type: Number
    },
    outflowCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ExpenseCategory"
    },
    description: {
        type: String
    },
    recurring: {
        type: Boolean,
        default: false,
        recur: {
            type: Date
        }
    },
    receiptImage: {
        type: String
    }
}, { timestamps: true });
export default mongoose.model("Expense", ExpenseSchema);
