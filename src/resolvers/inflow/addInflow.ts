import Inflow from "../../models/inflowModel";
import { Types } from "mongoose";

const addInflow = async (
  _: any,
  args: {
    title: string;
    amount: number;
    description: string;
    receiptImage: string[];
    user: Types.ObjectId;
    category: Types.ObjectId;
    modelType: string;
  }
) => {
  try {
    const inflow = new Inflow({ ...args });
    await inflow.populate("category");
    await inflow.populate("user");

    await inflow.save();
    return inflow;
  } catch (err: any) {
    console.log(err.message);
  }
};

export default addInflow;
