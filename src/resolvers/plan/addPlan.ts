import { Types } from "mongoose";
import Plan from "../../models/planModel";
import Expense from "../../models/expenseModel";




const addPlan = async(_:any, args: {user: Types.ObjectId, title: string, total: number, description: string, expenses: {amount: number, description: string, category: Types.ObjectId}[] }) => {
    
    const expensesFailSafe: Array<Types.ObjectId> = []
    try {
        const plan = new Plan({...args})
        await plan.populate('user')
        const _expenses = args.expenses.map(async _expense => {
            const expense = new Expense({..._expense, plan: plan._id, user: args.user})
            expensesFailSafe.push(expense._id)
            await expense.populate('category')
            await expense.save()
            return expense._doc
        })

        await plan.save()

        return {...plan._doc, expenses: _expenses}

    }
     catch(err: any) {
        expensesFailSafe.forEach( async expense => {
            await Expense.findByIdAndDelete(expense)
        })
        console.log(err.message)
    }
}

export default addPlan