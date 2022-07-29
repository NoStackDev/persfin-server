import mongoose, { Mongoose } from "mongoose";

const InflowCategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, {timestamps: true})

export default mongoose.model("InflowCategory", InflowCategorySchema)