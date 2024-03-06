import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
    {
        category: {
            type: String,
            required: true,
            unique: true,
        },
        itemCount: {
            type: Number,
            default: 1
        }
    },
    { timestamps: true }
);


export default mongoose.model('Category', CategorySchema);