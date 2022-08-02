import Plan from "../models/planModel";
import Expense from "../models/expenseModel";
import { PlanInterface, ExpenseInterface } from "../models/interfaces";


interface _PlanInterface extends PlanInterface {
    expenses?: Array<ExpenseInterface>
}

const retrieveExpenses = async (plan: _PlanInterface) => {
    const _expenses = await Expense.find({plan: plan._id})
    // populate category field
    const categoryPromises = _expenses.map( async _expense => {
        return await _expense.populate('category')
    })
    const _newExpenses = await Promise.all(categoryPromises)
    // populate plan field
    const planPromises = _newExpenses.map( async _expense => {
        return await _expense.populate('plan')
    })
    const expenses = await Promise.all(planPromises)
    return {...plan._doc, expenses}
}

const getPlans = async () => {
    try{
        const _plans = await Plan.find()
        const plansPromises = _plans.map(async _plan => {
            return await retrieveExpenses(_plan)
        })
        const plans: Array<_PlanInterface> = await Promise.all(plansPromises)
        return plans
        
    } catch(err: any) {
        console.log(err.message)
    }   
}

export default getPlans