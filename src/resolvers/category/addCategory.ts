import { Types } from "mongoose";
import Category from "../../models/categoryModel";

const addCategory = async (_: any, args: {title: string, categoryType: string, description: string, user: Types.ObjectId}) => {
    try {
        const category = new Category({...args})
        await category.save()
        await category.populate('user')
        return category
    } catch(err: any) {
        console.log(err.message)
    }
}

export default addCategory