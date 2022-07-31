import IncomeCategory from "../models/incomeCategoryModel";

const getIncomeCategories = async () => {
    try {
        const categories = await IncomeCategory.find()
        return categories
    } catch(err: any) {
        console.log(err.message)
    }
}

export default getIncomeCategories