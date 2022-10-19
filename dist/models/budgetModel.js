import mongoose from "mongoose";
const BudgetSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    total: {
        type: Number,
    },
    balance: {
        type: Number,
        default: (doc) => {
            return doc.total;
        }
    },
    description: {
        type: String,
    },
    items: [
        {
            title: String,
            description: String,
            amount: Number,
            category: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "category",
            },
            balance: {
                type: Number,
                default: (itemDoc) => {
                    return itemDoc.amount;
                }
            }
        },
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true });
export default mongoose.model("Budget", BudgetSchema);
