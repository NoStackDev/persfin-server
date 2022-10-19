import Budget from "../../models/budgetModel";
import { Types } from "mongoose";

const budgets = async (_: any, args: { user: Types.ObjectId }) => {
  try {
    const budgets = await Budget.find({ user: args.user });
    return budgets;
  } catch (err: any) {
    console.log(err.message);
  }
};

export default budgets;
