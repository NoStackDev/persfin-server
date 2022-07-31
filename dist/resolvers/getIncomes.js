var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Income from "../models/incomeModel";
const getIncomes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _incomes = yield Income.find();
        const incomes = _incomes.map((income) => __awaiter(void 0, void 0, void 0, function* () {
            yield income.populate('category');
            return income;
        }));
        return incomes;
    }
    catch (err) {
        console.log(err.message);
    }
});
export default getIncomes;
