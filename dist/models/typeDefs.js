import { gql } from "apollo-server-core";
const typeDefs = gql `

    type Income {
        id: ID
        amount: Float!
        category: IncomeCategory
        description: String
    }

    type Expense {
        id: ID
        amount: Float!
        category: ExpenseCategory
        description: String
        receiptImage: String
    }

    type IncomeCategory {
        id: ID
        title: String
        description: String
    }

    type ExpenseCategory {
        id: ID
        title: String
        description: String
    }

    type Budget {
        id: ID
        title: String
        total: Float
        description: String
        expenses: [Expense]
    }



    type Query {
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
        addIncome(amount: Float, description: String, categoryId: ID): Income
        addIncomeCategory(title: String, description: String): IncomeCategory
        addExpense(amount: Float, description: String, categoryId: ID): Expense
        addExpenseCategory(title: String, description: String): ExpenseCategory
        addBudget(title: String, total: Float, expenses: [ExpenseObjArray], description: String ): Budget
    }

`;
export default typeDefs;
