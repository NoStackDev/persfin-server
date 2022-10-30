import Savings from "../../models/savingsModel";
import { Types } from "mongoose";

const savings = async (_: any, args: {user: Types.ObjectId}) => {
    try {
        const _savings = await Savings.find({user: args.user})
        return _savings
    }
    catch(err:any) {
        console.log(err.message)
    }
}

export default savings