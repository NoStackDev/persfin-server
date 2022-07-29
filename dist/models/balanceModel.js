import mongoose from "mongoose";
const Balance = new mongoose.Schema({
    amount: {
        type: Number,
        default: 0.00
    },
}, { timestamps: true });
