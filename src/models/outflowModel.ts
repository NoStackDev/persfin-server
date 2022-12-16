import mongoose from "mongoose";
import { OutflowInterface } from "./interfaces";

const OutflowSchema = new mongoose.Schema<OutflowInterface>(
  {
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
    budget: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Budget",
      default: null,
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
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
    time: {
      type: Date,
      default: () => {
        return new Date(Date.now());
      },
    },
    modelType: {
      type: String,
      default: () => {
        return "outflow";
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model<OutflowInterface>("Outflow", OutflowSchema);
