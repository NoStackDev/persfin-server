import { users, addUser } from "./user";
import { addCategory, categories } from "./category";
import { addTransaction, transactions } from "./transaction";
import { addBudget, budgets } from "./budget";

const resolvers = {
  Query: {
    users,
    categories,
    transactions,
    budgets
  },

  Mutation: {
    addUser,
    addCategory,
    addTransaction,
    addBudget
  },
};

export default resolvers;
