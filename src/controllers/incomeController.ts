import Income from "../models/incomeModel";
import IncomeCategory from "../models/incomeCategoryModel";
import Balance from "../models/balanceModel";


const createIncomeCategory = async (args: {title: string, description: string}) => {
    try {
        const category = new IncomeCategory({...args})
        const savedCategory = await category.save()
        return savedCategory
    } catch(err:any){ console.log(err.message)}
}

export {createIncomeCategory}