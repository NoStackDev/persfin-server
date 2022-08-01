import mongoose from "mongoose";
const IncomeCategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });
export default mongoose.model("IncomeCategory", IncomeCategorySchema);
