import { Types } from "mongoose";
import mongoose from "mongoose";
import Plan from "../models/planModel";
import Expense from "../models/expenseModel";
import { ExpenseInterface } from "../models/interfaces";


const addPlan = async(_:any, args: {title: string, total: number, description: string, expenses: {
    amount: number, description: string, categoryId: string
}[] }) => {
    
    let expensesId: Types.ObjectId[] = [] // needed to clean up saved expense objs when an error is caught
    try{
        const plan = new Plan({
            title: args.title,
            total: args.total,
            description: args.description
        })
        
        const expenses: Array<ExpenseInterface> = []
        args.expenses.forEach(async (expenseObj) => {
            const expense = new Expense({...expenseObj})
            expensesId.push(expense._id)
            expense.category = new mongoose.Types.ObjectId(expenseObj.categoryId)
            expense.plan = plan._id
            expenses.push(expense._doc)
            await expense.save()
        })
        
        await plan.save()

        return {id: plan._id, ...plan._doc, expenses}

    } catch(err: any) {
        expensesId.forEach(async expenseId => {
            await Expense.findByIdAndDelete(expenseId)
        })
        console.log(err.message)
    }
}

export default addPlan