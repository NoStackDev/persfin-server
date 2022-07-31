import Expense from "../models/expenseModel"


const getEpenses = async () => {
    try {
        const _expenses = await Expense.find()
        const expenses = _expenses.map(async expense => {
            expense.populate('category')
            return expense
        })
        return expenses
    } catch(err: any) {
        console.log(err.message)
    }
}

export default getEpenses