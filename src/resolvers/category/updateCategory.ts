import { Types } from "mongoose";
import Category from "../../models/categoryModel";

const updateCategory = async (
  _: any,
  args: {
    categoryId: Types.ObjectId;
    title: string;
    description: string;
  }
) => {
  try {
    const category = await Category.findById(args.categoryId);
    if (!category) {
      throw new Error("category does not exist");
    }
    category.title = args.title;
    category.description = args.description;
    await category.save();
    await category.populate("user");
    return category;
  } catch (err: any) {
    console.log(err.message);
  }
};

export default updateCategory;
