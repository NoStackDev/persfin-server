import mongoose from "mongoose";
const InflowSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    amount: {
        type: Number,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    description: {
        type: String,
    },
    receiptImage: {
        type: [String],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    time: {
        type: Date,
        default: () => {
            return new Date(Date.now());
        },
    },
    modelType: {
        type: String,
        default: () => {
            return "inflow";
        },
    },
}, { timestamps: true });
export default mongoose.model("Inflow", InflowSchema);
