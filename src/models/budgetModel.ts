import mongoose from "mongoose";
import { BudgetInterface } from "./interfaces";

const BudgetSchema = new mongoose.Schema<BudgetInterface>(
  {
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
      },
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      default: "completed",
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
          },
        },
      },
    ],
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
        return "budget";
      },
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model<BudgetInterface>("Budget", BudgetSchema);
