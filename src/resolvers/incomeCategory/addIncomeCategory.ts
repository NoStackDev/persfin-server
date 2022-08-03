import { Types } from "mongoose";
import IncomeCategory from "../../models/incomeCategoryModel";


const addIncomeCategory = async (_:any, args: {title: string, description: string, user: Types.ObjectId}) => {
    try {
        const category = new IncomeCategory({...args})
        await category.save()
        await category.populate('user')
        return category
    } catch(err: any) {
        console.log(err.message)
    }
}

export default addIncomeCategory