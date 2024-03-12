import mongoose from "mongoose";
import Rank from "./rankModel.js";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    totalPointsEarned: {
        type: Number,
        default: 100
    },
    activePoints: {
        type: Number,
        default: 100
    },
    purchases: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Purchase'
    }],
    achivments: {
        type: [{
            name: {
                type: String,
            },
            points: {
                type: Number,
            }
        }],
        default: [{
            name: "medlem",
            points: 100
        }]
    },
    discounts: [{
        type: String
    }],
    rank: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rank',
        default: "65f0c2fcdeac73dee618dbf7" 
    }
});

UserSchema.pre('save', async function (next) {
    try {
        let rank = await Rank.findOne({ thresholdPoints: { $lte: this.totalPointsEarned } })
            .sort({ thresholdPoints: -1 })
            .limit(1);

        if (rank) {
            this.rank = rank._id;
        }

        next();
    } catch (error) {
        next(error);
    }
});

export default mongoose.model('User', UserSchema);