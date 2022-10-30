import { gql } from "apollo-server-core";
const typeDefs = gql `
  type User {
    _id: ID
    firstname: String
    lastname: String
    othernames: String
    email: String
  }

  type Inflow {
    _id: ID
    user: User
    title: String
    amount: Float
    category: Category
    description: String
    receiptImage: [String]
    createdAt: String
    time: String
  }

  type Outflow {
    _id: ID
    user: User
    title: String
    amount: Float
    category: Category
    budget: ID
    description: String
    receiptImage: [String]
    createdAt: String
    time: String
  }

  type Savings {
    _id: ID
    user: User
    amount: Float
    time: String
    createdAt: String
  }

  type Category {
    _id: ID
    user: User
    title: String
    categoryType: String
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
    inflows(user: ID): [Inflow]
    outflows(user: ID): [Outflow]
    savings(user: ID): [Savings]
    categories(user: ID): [Category]
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
    addInflow(
      user: ID
      title: String
      amount: Float
      category: ID
      description: String
      receiptImage: [String]
    ): Inflow
    addOutflow(
      user: ID
      title: String
      amount: Float
      category: ID
      budget: ID
      item: ID
      description: String
      receiptImage: [String]
    ): Outflow
    addSavings(user: ID, amount: Float): Savings
    addCategory(
      title: String
      categoryType: String
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
