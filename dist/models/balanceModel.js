import mongoose from "mongoose";
const BalanceSchema = new mongoose.Schema({
    amount: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });
export default mongoose.model("Balance", BalanceSchema);
