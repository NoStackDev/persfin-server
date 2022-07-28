import mongoose from "mongoose";
const SavingSchema = new mongoose.Schema({
    amount: {
        type: Number,
        default: 0.00
    }
}, { timestamps: true });
export default mongoose.model("Saving", SavingSchema);
