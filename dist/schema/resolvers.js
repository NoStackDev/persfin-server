var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import incomes from "./data";
import { createIncomeCategory } from "../controllers/incomeController";
import { createExpenseCategory } from "../controllers/expenseController";
const resolvers = {
    Query: {
        incomes() {
            return incomes;
        }
    },
    Mutation: {
        addIncomeCategory(parent, args) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const incomeCategory = yield createIncomeCategory({ title: args.title, description: args.description });
                    return incomeCategory;
                }
                catch (err) {
                    console.log(err.message);
                }
            });
        },
        addExpenseCategory(parent, args) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const expenseCategory = yield createExpenseCategory({ title: args.title, description: args.description });
                    return expenseCategory;
                }
                catch (err) {
                    console.log(err.message);
                }
            });
        }
    }
};
export default resolvers;
