import addUser from "./addUser";
import users from "./getUsers";
import incomes from "./getIncomes";
import addIncome from "./addIncome";
import incomeCategories from "./getIncomeCategories";
import addIncomeCategory from "./addIncomeCategory";
import expenses from "./getExpenses";
import addExpense from "./addExpense";
import expenseCategories from "./getExpenseCategories";
import addExpenseCategory from "./addExpenseCategory";
import plans from "./getPlans";
import addPlan from "./addPlan";
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
