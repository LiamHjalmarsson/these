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
        genderType: {
            type: String, 
            required: true,
        },
        size: {
            type: [{
                type: String,
                enum: ['xs', 's', 'm', 'l', 'xl', 'xxl']
            }], 
            default: ['xs', 's', 'm', 'l', 'xl', 'xxl']
        },
        color: {
            type: String,
            required: true,
        },
        image: {
            type: [String], 
            default: [
                "https://res.cloudinary.com/dx6tdy5de/image/upload/v1708628178/dl-clothing/dam_nfsxjt.jpg",
                "https://res.cloudinary.com/dx6tdy5de/image/upload/v1708628181/dl-clothing/herr_m73hux.jpg",
                "https://res.cloudinary.com/dx6tdy5de/image/upload/v1708628177/dl-clothing/chris-murray-YGzEX5yLKeA-unsplash_pi3dyz.jpg"
            ],
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