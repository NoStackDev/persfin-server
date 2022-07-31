import mongoose from "mongoose";
const BalanceSchema = new mongoose.Schema({
    amount: {
        type: Number,
        default: 0
    },
}, { timestamps: true });
export default mongoose.model("Balance", BalanceSchema);
