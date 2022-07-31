var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Budget from "../models/budgetModel";
import Expense from "../models/expenseModel";
const getBudget = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _budgets = yield Budget.find();
        let budgets = [];
        _budgets.forEach((budget) => __awaiter(void 0, void 0, void 0, function* () {
            const _expenses = yield Expense.find({ budget: budget._id }).exec();
            const expenses = [];
            _expenses.forEach(expense => {
                expenses.push(expense._doc);
            });
            budgets.push(Object.assign(Object.assign({}, budget._doc), { expenses }));
            console.log(budgets);
        }));
        // console.log(budgets)
        // return []
    }
    catch (err) {
        console.log(err.message);
    }
});
export default getBudget;
