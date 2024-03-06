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
    totalPoints: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
        default: 0
    }
});

export default mongoose.model('User', UserSchema);
