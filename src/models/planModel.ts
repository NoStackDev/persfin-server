import mongoose from "mongoose";
import { PlanInterface } from "./interfaces";

const PlanSchema = new mongoose.Schema<PlanInterface>({
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

export default mongoose.model<PlanInterface>("Plan", PlanSchema)