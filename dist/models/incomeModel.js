import mongoose from "mongoose";
const IncomeSchema = new mongoose.Schema({
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
        isRecurring: { type: Boolean, default: false },
        recurEvery: { type: Date }
    },
    description: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });
export default mongoose.model("Income", IncomeSchema);
