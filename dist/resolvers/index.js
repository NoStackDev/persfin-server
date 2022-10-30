import { users, addUser } from "./user";
import { addCategory, categories } from "./category";
import { addInflow, inflows } from "./inflow";
import { addOutflow, outflows } from "./outflow";
import { addSavings, savings } from "./savings";
import { addBudget, budgets } from "./budget";
const resolvers = {
    Query: {
        users,
        categories,
        inflows,
        outflows,
        savings,
        budgets,
    },
    Mutation: {
        addUser,
        addCategory,
        addInflow,
        addOutflow,
        addSavings,
        addBudget,
    },
};
export default resolvers;
