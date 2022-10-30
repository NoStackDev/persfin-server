import { Types } from "mongoose";
import Outflow from "../../models/outflowModel";

const outflows = async (_: any, args: { user: Types.ObjectId }) => {
  try {
    const _outflows = await Outflow.find({ user: args.user });
    const outflowsPromises = _outflows.map(async (_outflow) => {
      await _outflow.populate("user");
      await _outflow.populate("category");
      return _outflow;
    });
    const outflowsData = await Promise.all(outflowsPromises);
    return outflowsData;
  } catch (err: any) {
    console.log(err.message);
  }
};

export default outflows;
