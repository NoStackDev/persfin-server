import mongoose from "mongoose";

const IncomeSchema = new mongoose.Schema(
    {
        amount: {
            type: Number
        },
        source: {
            type: String
        },
        time: {
            type: Date
        },
        description: {
            type: String
        }
    },
    { timestamps: true }
)

export default mongoose.model("Income", IncomeSchema)