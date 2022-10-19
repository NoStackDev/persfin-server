import { gql } from "apollo-server-core";

const typeDefs = gql`
  type User {
    _id: ID
    firstname: String
    lastname: String
    othernames: String
    email: String
  }

  type Transaction {
    _id: ID
    user: User
    title: String
    amount: Float!
    transactionType: String
    category: Category
    budget: ID
    description: String
    receiptImage: [String]
  }

  type Category {
    _id: ID
    user: User
    title: String
    transactionType: String
    description: String
  }

  type BudgetItem {
    _id: ID
    title: String
    amount: Float
    balance: Float
    category: ID
    description: String
  }

  type Budget {
    _id: ID
    user: User
    title: String
    total: Float
    balance: Float
    description: String
    items: [BudgetItem]
  }


  type Query {
    users: [User]
    categories(user: ID): [Category]
    transactions(user: ID): [Transaction]
    budgets(user: ID): [Budget]
  }

  input BudgetItemInput {
    title: String
    amount: Float
    category: ID
    description: String
  }

  type Mutation {
    addUser(
      firstname: String
      lastname: String
      othername: String
      email: String
      password: String
    ): User
    addTransaction(
      user: ID
      title: String
      amount: Float
      transactionType: String
      category: ID
      budget: ID
      item: ID
      description: String
      receiptImage: [String]
    ): Transaction
    addCategory(
      title: String
      transactionType: String
      description: String
      user: ID
    ): Category
    addBudget(
      title: String
      total: Float
      items: [BudgetItemInput]
      description: String
      user: ID
    ): Budget
  }
`;
export default typeDefs;
