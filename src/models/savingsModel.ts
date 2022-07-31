import mongoose from "mongoose";
import { SavingInterface } from "./interfaces";

const SavingSchema = new mongoose.Schema<SavingInterface>({
    amount: {
        type: Number,
        default: 0.00
    }
},
{ timestamps: true }
)

export default mongoose.model<SavingInterface>("Saving", SavingSchema)