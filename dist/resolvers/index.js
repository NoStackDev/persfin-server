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
import budgets from "./getBudgets";
import addBudget from "./addBudget";
const resolvers = {
    Query: {
        users,
        incomes,
        incomeCategories,
        expenses,
        expenseCategories,
        budgets
    },
    Mutation: {
        addUser,
        addIncome,
        addIncomeCategory,
        addExpense,
        addExpenseCategory,
        addBudget
    }
};
export default resolvers;
