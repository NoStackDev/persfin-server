import Expense from "../models/expenseModel";
import ExpenseCategory from "../models/expenseCategoryModel";
import Balance from "../models/balanceModel";

const createExpenseCategory = async (args: {title: string, description: string}) => {
    try {
        const category = new ExpenseCategory({...args})
        const savedCategory = await category.save()
        return savedCategory
    } catch(err:any){ console.log(err.message)}
}

export {createExpenseCategory}
