import ExpenseCategory from "../models/expenseCategoryModel";
import { ExpenseCategoryInterface } from "../models/interfaces";

const addExpenseCategory = async (_: any, args: {title: string, description: string}) => {
    try {
        const expense = new ExpenseCategory({...args})
        await expense.save()
        return expense
    } catch(err: any) {
        console.log(err.message)
    }
}

export default addExpenseCategory