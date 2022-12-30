import { gql } from "apollo-server-core";
const typeDefs = gql `
  type User {
    _id: ID
    firstname: String
    lastname: String
    othernames: String
    email: String
    profilePic: String
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
    modelType: String
  }

  type Outflow {
    _id: ID
    user: User
    title: String
    amount: Float
    category: Category
    budget: ID
    item: ID
    description: String
    receiptImage: [String]
    createdAt: String
    time: String
    modelType: String
  }

  type Savings {
    _id: ID
    user: User
    amount: Float
    time: String
    createdAt: String
    modelType: String
  }

  type Category {
    _id: ID
    user: User
    title: String
    categoryType: String
    description: String
    time: String
    createdAt: String
    modelType: String
  }

  type BudgetItem {
    _id: ID
    title: String
    amount: Float
    category: ID
    balance: Float
    description: String
  }

  type Budget {
    _id: ID
    user: User
    title: String
    total: Float
    balance: Float
    status: String
    description: String
    items: [BudgetItem]
    time: String
    modelType: String
    completed: Boolean
    createdAt: String
  }

  type Query {
    users: [User]
    user(user: ID): User
    inflows(user: ID): [Inflow]
    outflows(user: ID): [Outflow]
    savings(user: ID): [Savings]
    categories(user: ID): [Category]
    budgets(user: ID): [Budget]
  }

  input BudgetItemInput {
    _id: ID
    title: String
    amount: Float
    balance: Float
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
    addSavings(user: ID, amount: Float, modelType: String): Savings
    addCategory(
      title: String
      categoryType: String
      description: String
      user: ID
    ): Category
    deleteCategory(category: ID): Category
    updateCategory(
      categoryId: ID
      title: String
      description: String
    ): Category
    addBudget(
      title: String
      total: Float
      items: [BudgetItemInput]
      description: String
      user: ID
    ): Budget
    deleteBudget(budget: ID): Budget
    updateBudget(
      budgetId: ID
      title: String
      total: Float
      balance: Float
      description: String
      items: [BudgetItemInput]
    ): Budget
  }
`;
export default typeDefs;
