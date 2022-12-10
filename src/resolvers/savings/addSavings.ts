import Savings from "../../models/savingsModel";
import { Types } from "mongoose";

const addSavings = async (
  _: any,
  args: { user: Types.ObjectId; amount: number; modelType: string }
) => {
  try {
    const savings = new Savings({ ...args });
    savings.save();
    return savings;
  } catch (err: any) {
    console.log(err.message);
  }
};

export default addSavings;
