import { gql } from "apollo-server-core";
const typeDefs = gql `

    type User {
        _id: ID
        firstname: String
        lastname: String
        othernames: String
        email: String
    }

    type Income {
        _id: ID
        amount: Float!
        category: IncomeCategory
        description: String
    }

    type Expense {
        _id: ID
        amount: Float!
        category: ExpenseCategory
        description: String
        receiptImage: String
        budget: Budget
    }

    type IncomeCategory {
        _id: ID
        title: String
        description: String
    }

    type ExpenseCategory {
        _id: ID
        title: String
        description: String
    }

    type Budget {
        _id: ID
        title: String
        total: Float
        description: String
        expenses: [Expense]
    }



    type Query {
        users: [User]
        incomes: [Income]
        incomeCategories: [IncomeCategory]
        expenses: [Expense]
        expenseCategories: [ExpenseCategory]
        budgets: [Budget]
    }

    input ExpenseObjArray {
        amount: Float
        description: String
        categoryId: ID
    }

    type Mutation {
        addUser(firstname: String, lastname: String, othername: String, email: String, password: String): User
        addIncome(amount: Float, description: String, categoryId: ID): Income
        addIncomeCategory(title: String, description: String): IncomeCategory
        addExpense(amount: Float, description: String, categoryId: ID): Expense
        addExpenseCategory(title: String, description: String): ExpenseCategory
        addBudget(title: String, total: Float, expenses: [ExpenseObjArray], description: String ): Budget
    }

`;
export default typeDefs;
