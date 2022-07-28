import mongoose from "mongoose";
const BudgetSchema = new mongoose.Schema({
    incomes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Income"
        }],
    expenditures: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "expenditure"
        }],
    balance: {
        type: Number,
        default: 0.00
    },
    month: {
        type: Number
    },
    year: {
        type: Number
    }
}, { timestamps: true });
export default mongoose.model("Budget", BudgetSchema);
