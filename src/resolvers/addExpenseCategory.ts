import { Types } from "mongoose";
import ExpenseCategory from "../models/expenseCategoryModel";

const addExpenseCategory = async (_: any, args: {title: string, description: string, user: Types.ObjectId}) => {
    try {
        const category = new ExpenseCategory({...args})
        await category.save()
        await category.populate('user')
        return category
    } catch(err: any) {
        console.log(err.message)
    }
}

export default addExpenseCategory