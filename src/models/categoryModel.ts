import mongoose, { Mongoose } from "mongoose";
import { CategoryInterface } from "./interfaces";

const CategorySchema = new mongoose.Schema<CategoryInterface>(
  {
    title: {
      type: String,
      required: true,
    },
    categoryType: {
      type: String,
      enum: ["inflow", "outflow"],
      default: "inflow",
    },
    description: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    modelType: {
      type: String,
      default: () => {
        return "category";
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model<CategoryInterface>("Category", CategorySchema);
