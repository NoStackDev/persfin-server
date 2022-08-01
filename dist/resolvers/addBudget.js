var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from "mongoose";
import Budget from "../models/budgetModel";
import Expense from "../models/expenseModel";
const addBudget = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    let expensesId = []; // needed to clean up saved expense objs when an error is caught
    try {
        const budget = new Budget({
            title: args.title,
            total: args.total,
            description: args.description
        });
        const expenses = [];
        args.expenses.forEach((expenseObj) => __awaiter(void 0, void 0, void 0, function* () {
            const expense = new Expense(Object.assign({}, expenseObj));
            expensesId.push(expense._id);
            expense.category = new mongoose.Types.ObjectId(expenseObj.categoryId);
            expense.budget = budget._id;
            expenses.push(expense._doc);
            yield expense.save();
        }));
        yield budget.save();
        return Object.assign(Object.assign({ id: budget._id }, budget._doc), { expenses });
    }
    catch (err) {
        expensesId.forEach((expenseId) => __awaiter(void 0, void 0, void 0, function* () {
            yield Expense.findByIdAndDelete(expenseId);
        }));
        console.log(err.message);
    }
});
export default addBudget;
