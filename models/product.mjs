import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true,"price must be provided"]
    },
    featured: {
        type: Boolean,
        default: false,
    },
    ratings: {
        type: Number,
        default: 4.9
    },
    createdAT: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ["apple","MI","samsung","oppo"],
            message: `{VALUE} is not supported`
        }
    }

})
export default mongoose.model('Product',productSchema) 