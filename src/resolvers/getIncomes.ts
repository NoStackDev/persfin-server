import Income from "../models/incomeModel";

const getIncomes = async () => {
    try {
        const _incomes = await Income.find()
        const incomes = _incomes.map(async income => {
            await income.populate('category')
            return income
        })
        return incomes
    } catch(err: any) { console.log(err.message) }
}

export default getIncomes   