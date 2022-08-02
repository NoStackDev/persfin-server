import { Types } from "mongoose";
import Expense from "../models/expenseModel";
import ExpenseCategory from "../models/expenseCategoryModel";
import User from "../models/userModel";


const addExpense = async (_: any, args: {amount: number, description: string, user: Types.ObjectId, category: Types.ObjectId}) => {
    try {
        const expense = new Expense({...args})
        const user = await User.findById(args.user)
        const category = await ExpenseCategory.findById(args.category)
        if (!category || !user) {
            return {body: "error category not found"}
        }
        expense.user = user._id
        expense.category = category._id
        await expense.save()
        return {...expense._doc, user, category}
    } catch(err: any) {
        console.log(err.message)
    }
}

export default addExpense