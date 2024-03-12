import mongoose from "mongoose";

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
            name: "member",
            points: 100
        }]
    },
    discounts:[{
        type: String
    }]
});

export default mongoose.model('User', UserSchema);
