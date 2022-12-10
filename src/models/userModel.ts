import mongoose from "mongoose";
import { UserInterface } from "./interfaces";

const UserSchema = new mongoose.Schema<Omit<UserInterface, "user">>(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    othernames: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<Omit<UserInterface, "user">>("User", UserSchema);
