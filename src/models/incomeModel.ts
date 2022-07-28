import mongoose from "mongoose";

const IncomeSchema = new mongoose.Schema(
    {
        amount: {
            type: Number,
            required: true
        },
        time: {
            type:   Date
        }
    },
    { timestamps: true }
)

export default mongoose.model("Income", IncomeSchema)