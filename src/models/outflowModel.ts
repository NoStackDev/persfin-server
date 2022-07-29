import mongoose, { mongo } from "mongoose";

const OutflowSchema = new mongoose.Schema({
    amount: {
        type: Number
    },
    outflowCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OutflowCategory"
    },
    description: {
        type: String
    },
    recurring: {
        type: Boolean,
        default: false,
        recur: {
            type: Date
        }
    },
    receiptImage: {
        type: String
    }
}, 
{ timestamps: true }
)

export default mongoose.model("Outflow", OutflowSchema)