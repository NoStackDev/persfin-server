import mongoose from "mongoose";
const OutflowCategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, { timestamps: true });
export default mongoose.model("OutflowCategory", OutflowCategorySchema);
