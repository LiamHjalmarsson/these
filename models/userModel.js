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
        default: 0
    },
    activePoints:{
        type: Number,
        default: 0
    },
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
    }
});

export default mongoose.model('User', UserSchema);
