import { gql } from "apollo-server-core";
const typeDefs = gql `

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
        title: String
        description: String
    }

    type ExpenseCategory {
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
        expenses: [Expense]
    }

    type Mutation {
        addIncome(data: IncomeInput): Income
        addIncomeCategory(title: String, description: String): IncomeCategory
        addExpense(data: ExpenseInput): Expense
        addExpenseCategory(title: String, description: String): ExpenseCategory
    }

`;
export default typeDefs;
