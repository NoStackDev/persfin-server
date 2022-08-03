import { users, addUser } from "./user";
import { addIncome, incomes } from "./income";
import { addIncomeCategory, incomeCategories } from "./incomeCategory";
import { addExpense, expenses } from "./expense";
import { addExpenseCategory, expenseCategories } from "./expenseCategory";
import { addPlan, plans } from "./plan";
const resolvers = {
    Query: {
        users,
        incomes,
        incomeCategories,
        expenses,
        expenseCategories,
        plans
    },
    Mutation: {
        addUser,
        addIncome,
        addIncomeCategory,
        addExpense,
        addExpenseCategory,
        addPlan
    }
};
export default resolvers;
