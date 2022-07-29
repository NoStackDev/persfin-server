import incomes from "./data";
import { createIncomeCategory } from "../controllers/incomeController"
import { createExpenseCategory } from "../controllers/expenseController";

const resolvers = {
    Query: {
        incomes() {
            return incomes
        }
    },

    Mutation: {
        async addIncomeCategory(parent: any, args: {title: string, description: string}){
            try {
                const incomeCategory = await createIncomeCategory({title: args.title, description: args.description})
                return incomeCategory
            } catch(err: any) {console.log(err.message)}

        },

        async addExpenseCategory(parent: any, args: {title: string, description: string}){
            try {
                const expenseCategory = await createExpenseCategory({title: args.title, description: args.description})
                return expenseCategory
            } catch(err: any) {console.log(err.message)}

        }

    }
}

export default resolvers