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
const getEpenses = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _expenses = yield Expense.find();
        const expenses = _expenses.map((expense) => __awaiter(void 0, void 0, void 0, function* () {
            expense.populate('category');
            return expense;
        }));
        return expenses;
    }
    catch (err) {
        console.log(err.message);
    }
});
export default getEpenses;
