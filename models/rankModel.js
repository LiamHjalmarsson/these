import mongoose from 'mongoose';

const rankSchema = new mongoose.Schema(
    {
        rank: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        benefits: [{
            name: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            amount: {
                type: Number,
                required: true,
            }
        }],
        thresholdPoints: { 
            type: Number, 
            required: true 
        }
    },
);

export default mongoose.model('Rank', rankSchema);