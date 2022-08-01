import mongoose from "mongoose";
import { BudgetInterface } from "./interfaces";

const BudgetSchema = new mongoose.Schema<BudgetInterface>({
    title: {
        type:String
    },
    total: {
        type: Number
    },
    recurring: {
        isRecurring: {type: Boolean, default: false},
        recurEvery: {type: Date}
    },
    description: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, 
    {timestamps: true}
)

export default mongoose.model<BudgetInterface>("Budget", BudgetSchema)