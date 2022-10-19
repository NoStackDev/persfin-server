import { Types } from "mongoose";
import Transaction from "../../models/transactionModel";

const transactions = async (_: any, args: {user: Types.ObjectId}) => {
    try {
        const _transactions = await Transaction.find({user: args.user})
        const transactionsPromises = _transactions.map(async _transaction => {
            await _transaction.populate('user')
            await _transaction.populate('category')
            return _transaction
        })
        const transactionsData = await Promise.all(transactionsPromises)
        return transactionsData
    } catch(err: any) { console.log(err.message) }
}

export default transactions