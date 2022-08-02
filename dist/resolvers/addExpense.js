var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Expense from "../models/expenseModel";
import ExpenseCategory from "../models/expenseCategoryModel";
import User from "../models/userModel";
const addExpense = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const expense = new Expense(Object.assign({}, args));
        const user = yield User.findById(args.user);
        const category = yield ExpenseCategory.findById(args.category);
        if (!category || !user) {
            return { body: "error category not found" };
        }
        expense.user = user._id;
        expense.category = category._id;
        yield expense.save();
        return Object.assign(Object.assign({}, expense._doc), { user, category });
    }
    catch (err) {
        console.log(err.message);
    }
});
export default addExpense;
