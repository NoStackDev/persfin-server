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
        user: User
        amount: Float!
        category: IncomeCategory
        description: String
    }

    type Expense {
        _id: ID
        user: User
        amount: Float!
        category: ExpenseCategory
        description: String
        receiptImage: String
        plan: Plan
    }

    type IncomeCategory {
        _id: ID
        user: User
        title: String
        description: String
    }

    type ExpenseCategory {
        _id: ID
        user: User
        title: String
        description: String
    }

    type Plan {
        _id: ID
        user: User
        title: String
        total: Float
        description: String
        expenses: [Expense]
    }




    type Query {
        users: [User]
        incomes(user: ID): [Income]
        incomeCategories(user: ID): [IncomeCategory]
        expenses(user: ID): [Expense]
        expenseCategories(user: ID): [ExpenseCategory]
        plans(user: ID): [Plan]
    }

    input ExpenseObjArray {
        amount: Float
        description: String
        category: ID
    }

    type Mutation {
        addUser(firstname: String, lastname: String, othername: String, email: String, password: String): User
        addIncome(amount: Float, description: String, user: ID, category: ID): Income
        addIncomeCategory(title: String, description: String, user: ID): IncomeCategory
        addExpense(amount: Float, description: String, user: ID, category: ID): Expense
        addExpenseCategory(title: String, description: String, user: ID): ExpenseCategory
        addPlan(title: String, total: Float, expenses: [ExpenseObjArray], description: String, user: ID): Plan
    }

`;
export default typeDefs;
