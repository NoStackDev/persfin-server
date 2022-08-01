import mongoose from "mongoose";
import { BalanceInterface } from "./interfaces";

const BalanceSchema = new mongoose.Schema<BalanceInterface>({
    amount: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

},
    {timestamps: true}
)

export default mongoose.model<BalanceInterface>("Balance", BalanceSchema)