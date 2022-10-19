import Transaction from "../../models/transactionModel";
import Budget from "../../models/budgetModel";
import { Types } from "mongoose";

const addTransaction = async (
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
  }
) => {
  try {
    const transaction = new Transaction({ ...args });

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
          itemExist = true;
          item.balance = item.balance - args.amount;
        }
      });
      if (!itemExist) {
        throw new Error("Item does not exist in Budget");
      }

      budget.save();
    }

    await transaction.populate("category");
    await transaction.populate("budget");
    await transaction.populate("user");

    await transaction.save();
    return transaction;
  } catch (err: any) {
    console.log(err.message);
  }
};

export default addTransaction;
