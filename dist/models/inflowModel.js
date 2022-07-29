import mongoose from "mongoose";
const InflowSchema = new mongoose.Schema({
    amount: {
        type: Number
    },
    source: {
        type: String
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
}, { timestamps: true });
export default mongoose.model("Inflow", InflowSchema);
