import mongoose from "mongoose";
import Income from "../models/incomeModel";
import IncomeCategory from "../models/incomeCategoryModel";


const addIncome = async (_: any, args: {amount: number, description: string, categoryId: string}) => {
    try {
        const income = new Income({...args})
        const category = await IncomeCategory.findById(args.categoryId)
        if (!category) {
            return {body: "error category not found"}
        }
        income.category = category._id
        await income.populate('category')
        await income.save()
        return income
    } catch(err: any) {
        console.log(err.message)
    }
}

export default addIncome