import { gql } from "apollo-server-core";
const typeDefs = gql `

    type Income {
        amount: Float!
        source: String
        time: String
        description: String
    }

    type Expenditure {
        amount: Float!
        category: [ExpenditureCategory]
    }

    enum ExpenditureCategory {
        FOOD
        TRANSPORTATION
        RENT
        MISC
    }

    type Query {
        incomes: [Income]
        expenditures: [Expenditure]
    }

`;
export default typeDefs;
