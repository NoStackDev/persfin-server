import { user, users, addUser } from "./user";
import { addCategory, deleteCategory, updateCategory, categories, } from "./category";
import { addInflow, inflows } from "./inflow";
import { addOutflow, outflows } from "./outflow";
import { addSavings, savings } from "./savings";
import { addBudget, deleteBudget, updateBudget, budgets } from "./budget";
const resolvers = {
    Query: {
        user,
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
        deleteCategory,
        updateCategory,
        addInflow,
        addOutflow,
        addSavings,
        addBudget,
        updateBudget,
        deleteBudget,
    },
};
export default resolvers;
