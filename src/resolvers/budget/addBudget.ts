import { Types } from "mongoose";
import Budget from "../../models/budgetModel";

const addBudget = async (
  _: any,
  args: {
    user: Types.ObjectId;
    title: string;
    total: number;
    description: string;
    items: {
      title: string;
      amount: number;
      description: string;
      category: Types.ObjectId;
    }[];
    modelType: string;
  }
) => {
  try {
    const budget = new Budget({ ...args });
    await budget.populate("user");
    budget.save();
    return budget;
  } catch (err: any) {
    console.log(err.message);
  }
};

export default addBudget;
