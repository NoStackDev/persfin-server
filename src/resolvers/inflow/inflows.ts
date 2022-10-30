import { Types } from "mongoose";
import Inflow from "../../models/inflowModel";

const inflows = async (_: any, args: { user: Types.ObjectId }) => {
  try {
    const _inflows = await Inflow.find({ user: args.user });
    const inflowsPromises = _inflows.map(async (_inflow) => {
      await _inflow.populate("user");
      await _inflow.populate("category");
      return _inflow;
    });
    const inflowsData = await Promise.all(inflowsPromises);
    return inflowsData;
  } catch (err: any) {
    console.log(err.message);
  }
};

export default inflows;
