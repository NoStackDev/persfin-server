import mongoose from "mongoose";
const IncomeCategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, { timestamps: true });
export default mongoose.model("IncomeCategory", IncomeCategorySchema);
