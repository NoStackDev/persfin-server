import mongoose from "mongoose";
const ExpenditureSchema = new mongoose.Schema({
    amount: {
        type: Number
    },
    expenditureCategory: {
        type: String,
        enum: ["FOOD", "TRANSPORTATION", "RENT", "MISC"]
    },
    description: {
        type: String
    },
    receiptImage: {
        type: String
    }
}, { timestamps: true });
export default mongoose.model("Expenditure", ExpenditureSchema);
