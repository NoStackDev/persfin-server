import mongoose from "mongoose";
const BudgetSchema = new mongoose.Schema({
    title: {
        type: String
    },
    total: {
        type: Number
    },
    recurring: {
        isRecurring: { type: Boolean, default: false },
        recurEvery: { type: Date }
    },
    description: {
        type: String
    }
});
export default mongoose.model("Budget", BudgetSchema);
