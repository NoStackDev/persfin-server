var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Plan from "../models/planModel";
import Expense from "../models/expenseModel";
const addPlan = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    const expensesFailSafe = [];
    try {
        const plan = new Plan(Object.assign({}, args));
        yield plan.populate('user');
        const _expenses = args.expenses.map((_expense) => __awaiter(void 0, void 0, void 0, function* () {
            const expense = new Expense(Object.assign(Object.assign({}, _expense), { plan: plan._id, user: args.user }));
            expensesFailSafe.push(expense._id);
            yield expense.populate('category');
            yield expense.save();
            return expense._doc;
        }));
        yield plan.save();
        return Object.assign(Object.assign({}, plan._doc), { expenses: _expenses });
    }
    catch (err) {
        expensesFailSafe.forEach((expense) => __awaiter(void 0, void 0, void 0, function* () {
            yield Expense.findByIdAndDelete(expense);
        }));
        console.log(err.message);
    }
});
export default addPlan;
