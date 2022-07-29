import incomes from "./data";
import { createIncomeCategory, getIncomeCategories } from "../controllers/incomeController"
import { createExpenseCategory, getExpenseCategories } from "../controllers/expenseController";

const resolvers = {
    Query: {
        incomes() {
            return incomes
        },
        async incomeCategories() {
            const categories = await getIncomeCategories()
            return categories
        },
        async expenseCategories() {
            const categories = await getExpenseCategories()
            return categories
        }
    },

    Mutation: {
        async addIncomeCategory(parent: any, args: {title: string, description: string}){
            try {
                const category = await createIncomeCategory({title: args.title, description: args.description})
                return category
            } catch(err: any) {console.log(err.message)}

        },

        async addExpenseCategory(parent: any, args: {title: string, description: string}){
            try {
                const category = await createExpenseCategory({title: args.title, description: args.description})
                return category
            } catch(err: any) {console.log(err.message)}

        }

    }
}

export default resolvers