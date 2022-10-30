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
          new Date("2022-07").getTime() +
            Math.ceil(Math.random() * (1000 * 60 * 60 * 24 * 30 * 4))
        );
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model<SavingsInterface>("Savings", SavingsSchema);
