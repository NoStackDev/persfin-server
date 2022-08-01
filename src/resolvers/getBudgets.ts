import Budget from "../models/budgetModel";
import Expense from "../models/expenseModel";
import { BudgetInterface, ExpenseInterface } from "../models/interfaces";


interface _BudgetInterface extends BudgetInterface {
    expenses?: Array<ExpenseInterface>
}

const retrieveExpenses = async (budget: _BudgetInterface) => {
    const _expenses = await Expense.find({budget: budget._id})
    const categoryPromises = _expenses.map( async _expense => {
        return await _expense.populate('category')
    })
    const _newExpenses = await Promise.all(categoryPromises)
    const budgetPromises = _newExpenses.map( async _expense => {
        return await _expense.populate('budget')
    })
    const expenses = await Promise.all(budgetPromises)
    return {...budget._doc, expenses}
}

const getBudget = async () => {
    try{
        const _budgets = await Budget.find()
        const budgetsPromises = _budgets.map(async _budget => {
            return await retrieveExpenses(_budget)
        })

        const budgets: Array<_BudgetInterface> = await Promise.all(budgetsPromises)
        return budgets
        
    } catch(err: any) {
        console.log(err.message)
    }   
}

export default getBudget