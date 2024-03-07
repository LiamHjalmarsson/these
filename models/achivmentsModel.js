import mongoose from 'mongoose';

const AchievementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        default: "https://cdn.dribbble.com/users/189524/screenshots/1825724/achievementsgif_v1_still_2x.gif?resize=400x0"
    },
});

export default mongoose.model('Achievement', AchievementSchema);