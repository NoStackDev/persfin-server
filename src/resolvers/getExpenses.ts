import { Types } from "mongoose"
import Expense from "../models/expenseModel"


const getEpenses = async (_: any, args: {user: Types.ObjectId}) => {
    try {
        const _expenses = await Expense.find({user: args.user})
        const userCatPromises = _expenses.map(async _expense => {
            await _expense.populate('user')
            await _expense.populate('category')
            return _expense
        })

        const expenses = await Promise.all(userCatPromises)
        return expenses 
        
    } catch(err: any) {
        console.log(err.message)
    }
}

export default getEpenses