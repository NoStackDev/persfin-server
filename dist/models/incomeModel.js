import mongoose from "mongoose";
const IncomeSchema = new mongoose.Schema({
    amount: {
        type: Number,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "IncomeCategory",
    },
    time: {
        type: Date,
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
export default mongoose.model("Income", IncomeSchema);
