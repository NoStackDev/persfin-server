import mongoose from "mongoose";
const BudgetSchema = new mongoose.Schema({
    expenditures: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "expenditure"
        }],
    amount: {
        type: Number,
        default: 0.00
    },
    recurring: {
        type: Boolean,
        default: false,
        recur: {
            type: Date
        }
    },
    budgetDuration: {
        type: Date
    }
}, { timestamps: true });
export default mongoose.model("Budget", BudgetSchema);
