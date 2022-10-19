import { Types } from "mongoose";
import Category from "../../models/categoryModel";



const getCategories = async (_: any, args: {user: Types.ObjectId}) => {
    try {
        const _categories = await Category.find({user: args.user})
        const categoriesUserPromises = _categories.map(async _category => {
            return await _category.populate('user')
        } )
        const categories = await Promise.all(categoriesUserPromises)
        return categories
    } catch(err: any) {
        console.log(err.message)
    }
}

export default getCategories