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
    // const _expenses = await Expense.find({plan: plan._id})
    // populate category field
    // const categoryPromises = _expenses.map( async _expense => {
    //     return await _expense.populate('category')
    // })
    // const _newExpenses = await Promise.all(categoryPromises)
    // // populate plan field
    // const planPromises = _newExpenses.map( async _expense => {
    //     return await _expense.populate('plan')
    // })
    // const expenses = await Promise.all(planPromises)
    // return {...plan._doc, expenses}
});
const getPlans = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const _plans = await Plan.find()
        // const plansPromises = _plans.map(async _plan => {
        //     return await retrieveExpenses(_plan)
        // })
        // const plans: Array<_PlanInterface> = await Promise.all(plansPromises)
        // return plans
        const _plans = yield Plan.find({ user: args.user });
        const plansPromise = _plans.map((_plan) => __awaiter(void 0, void 0, void 0, function* () {
            const _expenses = yield Expense.find({ plan: _plan._id });
            const expensesPromises = _expenses.map((_expense) => __awaiter(void 0, void 0, void 0, function* () {
                return yield _expense.populate('category');
            }));
            const expenses = yield Promise.all(expensesPromises);
            return Object.assign(Object.assign({}, _plan._doc), { expenses });
        }));
        const plans = yield Promise.all(plansPromise);
        return plans;
    }
    catch (err) {
        console.log(err.message);
    }
});
export default getPlans;
