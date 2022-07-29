import mongoose from "mongoose";

const IncomeSchema = new mongoose.Schema(
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
            type: Boolean,
            default: false,
            recur: {
                type: Date
            }
        }, 
        description: {
            type: String
        }
    },
    { timestamps: true }
)

export default mongoose.model("Income", IncomeSchema)