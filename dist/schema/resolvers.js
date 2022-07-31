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
import { createIncome, createIncomeCategory, getIncomeCategories } from "../controllers/incomeController";
import { createExpenseCategory, getExpenseCategories } from "../controllers/expenseController";
const resolvers = {
    Query: {
        incomes() {
            return incomes;
        },
        incomeCategories() {
            return __awaiter(this, void 0, void 0, function* () {
                const categories = yield getIncomeCategories();
                return categories;
            });
        },
        expenseCategories() {
            return __awaiter(this, void 0, void 0, function* () {
                const categories = yield getExpenseCategories();
                return categories;
            });
        }
    },
    Mutation: {
        addIncome(parent, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const income = yield createIncome({ amount: args.amount, description: args.description });
                return income;
            });
        },
        addIncomeCategory(parent, args) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const category = yield createIncomeCategory({ title: args.title, description: args.description });
                    return category;
                }
                catch (err) {
                    console.log(err.message);
                }
            });
        },
        addExpenseCategory(parent, args) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const category = yield createExpenseCategory({ title: args.title, description: args.description });
                    return category;
                }
                catch (err) {
                    console.log(err.message);
                }
            });
        }
    }
};
export default resolvers;
