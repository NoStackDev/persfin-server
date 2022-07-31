import mongoose from "mongoose";
import { IncomeInterface } from "./interfaces";

const IncomeSchema = new mongoose.Schema<IncomeInterface>(
    {
        amount: {
            type: Number
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "IncomeCategory"
        },
        time: {
            type: Date
        },
        recurring: {
            isRecurring: {type: Boolean, default: false},
            recurEvery: {type: Date}
        },
        description: {
            type: String
        }
    },
    { timestamps: true }
)

export default mongoose.model<IncomeInterface>("Income", IncomeSchema)