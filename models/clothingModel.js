import mongoose from 'mongoose';

const ClothingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: 'Category',
            required: true,
        },
        size: {
            type: String,
            enum: ['XS', 'S', 'M', 'L', 'XL'],
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model('Clothing', ClothingSchema);