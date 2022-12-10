import mongoose from "mongoose";
import { InflowInterface } from "./interfaces";

const InflowSchema = new mongoose.Schema<InflowInterface>(
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
      enum: ["inflow"],
    },
  },
  { timestamps: true }
);

export default mongoose.model<InflowInterface>("Inflow", InflowSchema);
