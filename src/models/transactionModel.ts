import mongoose from "mongoose";
import { TransactionInterface } from "./interfaces";

const TransactionSchema = new mongoose.Schema<TransactionInterface>(
  {
    title: {
      type: String,
    },
    amount: {
      type: Number,
    },
    transactionType: {
      type: String,
      enum: ["inflow", "outflow", "savings"],
      default: "inflow",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    budget: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Budget",
      default: null,
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
  },
  { timestamps: true }
);

export default mongoose.model<TransactionInterface>(
  "Transaction",
  TransactionSchema
);
