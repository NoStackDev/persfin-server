import mongoose from "mongoose";
const ExpenseCategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, { timestamps: true });
export default mongoose.model("ExpenseCategory", ExpenseCategorySchema);
