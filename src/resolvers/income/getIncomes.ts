import { Types } from "mongoose";
import Income from "../../models/incomeModel";

const getIncomes = async (_: any, args: {user: Types.ObjectId}) => {
    try {
        const _incomes = await Income.find({user: args.user})
        const incomesUserPromises = _incomes.map(async _income => {
            await _income.populate('user')
            await _income.populate('category')
            return _income
        })
        const incomes = await Promise.all(incomesUserPromises)
        return incomes
    } catch(err: any) { console.log(err.message) }
}

export default getIncomes   