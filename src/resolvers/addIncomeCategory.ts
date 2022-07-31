import IncomeCategory from "../models/incomeCategoryModel";


const addIncomeCategory = async (_:any, args: {title: string, description: string}) => {
    try {
        const income = new IncomeCategory({...args})
        await income.save()
        return income
    } catch(err: any) {
        console.log(err.message)
    }
}

export default addIncomeCategory