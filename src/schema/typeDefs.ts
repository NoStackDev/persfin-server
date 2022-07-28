import { gql } from "apollo-server-core";



const typeDefs = gql`

    type Income {
        amount: Float!
    }

    type Expense {
        amount: Float!
        category: [ExpenseCategory]
    }

    enum ExpenseCategory {
        FOOD
        TRANSPORTATION
        RENT
        OTHERS
    }

    type Query {
        income: [Income]
        expenses: [Expense]
    }

`
export default typeDefs