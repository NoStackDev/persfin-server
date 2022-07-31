import Budget from "../models/budgetModel";
import Expense from "../models/expenseModel";
import { BudgetInterface, ExpenseInterface } from "../models/interfaces";

interface _BudgetInterface extends BudgetInterface {
    expenses: Array<ExpenseInterface>
}

const getBudget = async () => {
    try{
        const _budgets = await Budget.find()

        let budgets: Array<_BudgetInterface> = []

        _budgets.forEach(async budget => {
            const _expenses = await Expense.find({budget: budget._id}).exec()
            const expenses: Array<ExpenseInterface> = []
            _expenses.forEach( expense => {
                expenses.push(expense._doc)
            })
            budgets.push({...budget._doc, expenses})
            console.log(budgets)
        })

        // console.log(budgets)

        // return []
    } catch(err: any) {
        console.log(err.message)
    }
}

export default getBudget