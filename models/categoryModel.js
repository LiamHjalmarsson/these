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
        },
        image: {
            type: [String], 
            default: [
                "https://res.cloudinary.com/dx6tdy5de/image/upload/v1708628178/dl-clothing/dam_nfsxjt.jpg",
            ],
        },
    },
    { timestamps: true }
);


export default mongoose.model('Category', CategorySchema);