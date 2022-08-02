import { Types } from "mongoose";
import IncomeCategory from "../models/incomeCategoryModel";

const getIncomeCategories = async (_: any, args: { user: Types.ObjectId}) => {
    try {
        const _categories = await IncomeCategory.find({user: args.user})
        const categoriesUserPromise = _categories.map(async _category => {
            return await _category.populate('user')
        })
        const categories = Promise.all(categoriesUserPromise)
        return categories
    } catch(err: any) {
        console.log(err.message)
    }
}

export default getIncomeCategories