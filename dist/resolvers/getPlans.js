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
const retrieveExpenses = (plan) => __awaiter(void 0, void 0, void 0, function* () {
    const _expenses = yield Expense.find({ plan: plan._id });
    // populate category field
    const categoryPromises = _expenses.map((_expense) => __awaiter(void 0, void 0, void 0, function* () {
        return yield _expense.populate('category');
    }));
    const _newExpenses = yield Promise.all(categoryPromises);
    // populate plan field
    const planPromises = _newExpenses.map((_expense) => __awaiter(void 0, void 0, void 0, function* () {
        return yield _expense.populate('plan');
    }));
    const expenses = yield Promise.all(planPromises);
    return Object.assign(Object.assign({}, plan._doc), { expenses });
});
const getPlans = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _plans = yield Plan.find();
        const plansPromises = _plans.map((_plan) => __awaiter(void 0, void 0, void 0, function* () {
            return yield retrieveExpenses(_plan);
        }));
        const plans = yield Promise.all(plansPromises);
        return plans;
    }
    catch (err) {
        console.log(err.message);
    }
});
export default getPlans;
