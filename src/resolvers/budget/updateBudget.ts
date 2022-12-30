import { Types } from "mongoose";
import Budget from "../../models/budgetModel";

const updateBudget = async (
  _: any,
  args: {
    budgetId: Types.ObjectId;
    title: string;
    total: number;
    balance: number;
    description: string;
    items: {
      _id: Types.ObjectId;
      title: string;
      amount: number;
      balance: number;
      description: string;
      category: Types.ObjectId;
    }[];
  }
) => {
  try {
    const budget = await Budget.findByIdAndUpdate(args.budgetId, { ...args });
    if (!budget) {
      throw new Error("Budget not found");
    }
    await budget.populate("user");
    return budget;
  } catch (err: any) {
    console.log(err.message);
  }
};

export default updateBudget;
