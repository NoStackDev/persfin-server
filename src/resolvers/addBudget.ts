import { Types } from "mongoose";
import mongoose from "mongoose";
import Budget from "../models/budgetModel";
import Expense from "../models/expenseModel";
import { ExpenseInterface } from "../models/interfaces";


const addBudget = async(_:any, args: {title: string, total: number, description: string, expenses: {
    amount: number, description: string, categoryId: string
}[] }) => {
    
    let expensesId: Types.ObjectId[] = [] // needed to clean up saved expense objs when an error is caught
    try{
        const budget = new Budget({
            title: args.title,
            total: args.total,
            description: args.description
        })
        
        const expenses: Array<ExpenseInterface> = []
        args.expenses.forEach(async (expenseObj) => {
            const expense = new Expense({...expenseObj})
            expensesId.push(expense._id)
            expense.category = new mongoose.Types.ObjectId(expenseObj.categoryId)
            expense.budget = budget._id
            expenses.push(expense._doc)
            await expense.save()
        })
        
        await budget.save()

        return {id: budget._id, ...budget._doc, expenses}

    } catch(err: any) {
        expensesId.forEach(async expenseId => {
            await Expense.findByIdAndDelete(expenseId)
        })
        console.log(err.message)
    }
}

export default addBudget