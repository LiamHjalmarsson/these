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
                "https://res.cloudinary.com/dx6tdy5de/image/upload/v1710247671/dl-clothing/nokdzgw6pitojlrn8n4c.jpg",
                "https://res.cloudinary.com/dx6tdy5de/image/upload/v1710247670/dl-clothing/kzifiwkrz73k6bx4qpv2.jpg",
            ],
        },
    },
    { timestamps: true }
);


export default mongoose.model('Category', CategorySchema);