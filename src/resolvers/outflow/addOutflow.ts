import Outflow from "../../models/outflowModel";
import Budget from "../../models/budgetModel";
import { Types } from "mongoose";

const addOutflow = async (
  _: any,
  args: {
    title: string;
    amount: number;
    transactionType: string;
    description: string;
    budget: Types.ObjectId;
    item: Types.ObjectId;
    receiptImage: string[];
    user: Types.ObjectId;
    category: Types.ObjectId;
    modelType: string;
  }
) => {
  try {
    const outflow = new Outflow({ ...args });

    if (args.budget) {
      const budget = await Budget.findById(args.budget);

      if (!budget) {
        throw new Error("Budget does not exist");
      }

      budget.balance = budget.balance - args.amount;

      let itemExist = false;
      const itemId = args.item.toString();
      budget.items.map((item) => {
        if (item._id.toString() === itemId) {
          outflow.category = item.category;
          outflow.item = args.item;
          itemExist = true;
          item.balance = item.balance - args.amount;
        }
      });

      if (!itemExist) {
        throw new Error("Item does not exist in Budget");
      }

      if (budget.balance === 0) {
        budget.completed = true;
      }

      budget.save();
    }

    await outflow.populate("category");
    await outflow.populate("budget");
    await outflow.populate("user");

    await outflow.save();
    return outflow;
  } catch (err: any) {
    console.log(err.message);
  }
};

export default addOutflow;
