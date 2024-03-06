import mongoose from 'mongoose';
import Category from "./categoryModel.js";

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
            type: String, 
            required: true,
        },
        size: {
            type: [String], 
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

ClothingSchema.pre('save', async function(next) {
    try {
        
        let existingCategory = await Category.findOne({ category: this.category });

        if (!existingCategory) {
            let newCategory = new Category({ category: this.category });
            await newCategory.save();
        } else {
            existingCategory.itemCount += 1;
            await existingCategory.save();
        }
        next();
    } catch (error) {
        next(error);
    }
});

export default mongoose.model('Clothing', ClothingSchema);