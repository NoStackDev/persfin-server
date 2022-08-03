import Plan from "../../models/planModel";
import Expense from "../../models/expenseModel";
import { PlanInterface, ExpenseInterface } from "../../models/interfaces";
import { Types } from "mongoose";


interface _PlanInterface extends PlanInterface {
    expenses?: Array<ExpenseInterface>
}

// const retrieveExpenses = async (plan: _PlanInterface) => {
    // const _expenses = await Expense.find({plan: plan._id})
    // populate category field
    // const categoryPromises = _expenses.map( async _expense => {
    //     return await _expense.populate('category')
    // })
    // const _newExpenses = await Promise.all(categoryPromises)
    // // populate plan field
    // const planPromises = _newExpenses.map( async _expense => {
    //     return await _expense.populate('plan')
    // })
    // const expenses = await Promise.all(planPromises)
    // return {...plan._doc, expenses}
    
// }

const getPlans = async (_: any, args: {user: Types.ObjectId}) => {
    try{
        // const _plans = await Plan.find()
        // const plansPromises = _plans.map(async _plan => {
        //     return await retrieveExpenses(_plan)
        // })
        // const plans: Array<_PlanInterface> = await Promise.all(plansPromises)
        // return plans

        const _plans: Array<_PlanInterface> = await Plan.find({user: args.user})
        const plansPromise = _plans.map( async _plan => {
            const _expenses = await Expense.find({plan: _plan._id})
            const expensesPromises = _expenses.map( async _expense => {
               return await _expense.populate('category')
                
            })
            const expenses = await Promise.all(expensesPromises)
            return {..._plan._doc, expenses}
        })
        const plans = await Promise.all(plansPromise)
        return plans
        
        
    } catch(err: any) {
        console.log(err.message)
    }   
}

export default getPlans