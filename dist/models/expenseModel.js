import mongoose from "mongoose";
const ExpenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ExpenseCategory",
    },
    plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Plan",
    },
    description: {
        type: String,
    },
    receiptImage: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true });
export default mongoose.model("Expense", ExpenseSchema);
