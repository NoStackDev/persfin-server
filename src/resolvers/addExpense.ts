import mongoose from "mongoose";
import Expense from "../models/expenseModel";
import ExpenseCategory from "../models/expenseCategoryModel";


const addExpense = async (_: any, args: {amount: number, description: string, categoryId: string}) => {
    try {
        const expense = new Expense({...args})
        const category = await ExpenseCategory.findById(args.categoryId)
        if (!category) {
            return {body: "error category not found"}
        }
        expense.category = category._id
        await expense.populate('category')
        await expense.save()
        return expense
    } catch(err: any) {
        console.log(err.message)
    }
}

export default addExpense