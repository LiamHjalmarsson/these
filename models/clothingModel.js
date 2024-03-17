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
        averageRating: {
            type: Number,
        },
        totalRatings: {
            type: Number
        },
        image: {
            type: [String], 
            default: [
                "https://res.cloudinary.com/dx6tdy5de/image/upload/v1710247670/dl-clothing/kzifiwkrz73k6bx4qpv2.jpg",
            ],
        },
        description: {
            type: String,
            default: "Höj din avslappnade stil med vårt plagg. Tillverkad av premiumkvalitetsdenim, har detta plagg en klassisk design. Oavsett om du ska ut på äventyr en helg eller bara utföra ärenden i stan, kommer vårt plagg att hålla dig snygg och bekväm."
        }
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