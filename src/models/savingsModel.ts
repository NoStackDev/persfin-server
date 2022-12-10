import mongoose, { mongo } from "mongoose";
import { SavingsInterface } from "./interfaces";

const SavingsSchema = new mongoose.Schema<SavingsInterface>(
  {
    amount: {
      type: Number,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    time: {
      type: Date,
      default: () => {
        return new Date(
          Date.now()
        );
      },
    },
    modelType: {
      type: String,
      enum: ["savings"],
    },
  },
  { timestamps: true }
);

export default mongoose.model<SavingsInterface>("Savings", SavingsSchema);
