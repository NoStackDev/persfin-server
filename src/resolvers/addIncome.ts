import Income from "../models/incomeModel";
import IncomeCategory from "../models/incomeCategoryModel";
import { Types } from "mongoose";


const addIncome = async (_: any, args: {amount: number, description: string, user: Types.ObjectId, category: Types.ObjectId}) => {
    try {
        const income = new Income({...args})
        const category = await IncomeCategory.findById(args.category)
        if (!category) {
            return {body: "error category not found"}
        }
        income.category = category._id
        await income.populate('category')
        await income.populate('user')
        
        await income.save()
        return income


    } catch(err: any) {
        console.log(err.message)
    }
}

export default addIncome