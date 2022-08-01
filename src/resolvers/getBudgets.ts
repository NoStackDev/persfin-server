import { AnyMxRecord } from "dns";
import { Types } from "mongoose";
import Budget from "../models/budgetModel";
import Expense from "../models/expenseModel";
import { BudgetInterface, ExpenseInterface } from "../models/interfaces";
import getExpenseCategories from "./getExpenseCategories";

interface _BudgetInterface extends BudgetInterface {
    expenses?: Array<ExpenseInterface>
}

const retrieveExpenses = async (budget: _BudgetInterface) => {
    const expenses = await Expense.find({budget: budget._id})
    console.log(expenses)
    return {...budget._doc, expenses, id: budget._id}
}

const getBudget = async () => {
    try{
        const _budgets = await Budget.find()
        const budgetsPromises: any = _budgets.map(async _budget => {
            const budget = await retrieveExpenses(_budget)
            return budget
        })

        const budgets: Array<_BudgetInterface> = await Promise.all(budgetsPromises)
        return budgets
        
    } catch(err: any) {
        console.log(err.message)
    }   
}

export default getBudget