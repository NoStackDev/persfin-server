import { Types } from "mongoose";
import Category from "../../models/categoryModel";

const deleteCategory = async (_: any, args: { category: Types.ObjectId }) => {
  try {
    const deletedCagtegory = await Category.findByIdAndDelete(args.category);
    return deletedCagtegory;
  } catch (err: any) {
    console.log(err.message);
  }
};

export default deleteCategory;
