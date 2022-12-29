import { Types } from "mongoose";
import Budget from "../../models/budgetModel";

const deleteBudget = async (
  _: any,
  args: {
    budget: Types.ObjectId;
  }
) => {
  try {
    const deletedBudget = await Budget.findByIdAndDelete(args.budget);
    return deletedBudget;
  } catch (err: any) {
    console.log(err.message);
  }
};

export default deleteBudget;
