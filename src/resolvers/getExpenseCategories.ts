import ExpenseCategory from "../models/expenseCategoryModel";


const getExpenseCategories = async () => {
    try {
        const categories = await ExpenseCategory.find()
        return categories
    } catch(err: any) {
        console.log(err.message)
    }
}

export default getExpenseCategories