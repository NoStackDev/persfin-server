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
            return new Date(new Date('2022-07').getTime() + Math.ceil(Math.random() * (1000 * 60 * 60 * 24 * 30 * 4)));
        }
    }
}, { timestamps: true });
export default mongoose.model("Inflow", InflowSchema);
