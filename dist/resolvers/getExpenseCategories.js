var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ExpenseCategory from "../models/expenseCategoryModel";
const getExpenseCategories = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _categories = yield ExpenseCategory.find({ user: args.user });
        const categoriesUserPromises = _categories.map((_category) => __awaiter(void 0, void 0, void 0, function* () {
            return yield _category.populate('user');
        }));
        const categories = yield Promise.all(categoriesUserPromises);
        return categories;
    }
    catch (err) {
        console.log(err.message);
    }
});
export default getExpenseCategories;
