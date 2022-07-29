import { gql } from "apollo-server-core";



const typeDefs = gql`

    type Income {
        amount: Float!
        category: IncomeCategory
        description: String
    }

    type Expense {
        amount: Float!
        category: [ExpenseCategory]
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

    input IncomeInput {
        amount: String
        description:String
    }

    input ExpenseInput {
        amount: String
        description: String
        receiptImage: String    
    }

    type Query {
        incomes: [Income]
        incomeCategories: [IncomeCategory]
        expenses: [Expense]
        expenseCategories: [ExpenseCategory]
        balance: balance
    }

    type Mutation {
        addIncome(data: IncomeInput): Income
        addIncomeCategory(title: String, description: String): IncomeCategory
        addExpense(data: ExpenseInput): Expense
        addExpenseCategory(title: String, description: String): ExpenseCategory
    }

`
export default typeDefs