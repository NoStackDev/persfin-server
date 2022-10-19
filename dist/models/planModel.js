import mongoose from "mongoose";
const PlanSchema = new mongoose.Schema({
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
    },
    items: {
        type: [mongoose.SchemaTypes.Mixed]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    balance: {
        type: Number
    }
}, { timestamps: true });
export default mongoose.model("Plan", PlanSchema);
