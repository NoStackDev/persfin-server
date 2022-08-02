import Expense from "../models/expenseModel"


const getEpenses = async () => {
    try {
        const _expenses = await Expense.find()
        const userPromises = _expenses.map(async _expense => {
            return await _expense.populate('user')
        })
        
    } catch(err: any) {
        console.log(err.message)
    }
}

export default getEpenses