import mongoose from 'mongoose';

const UserAchievementSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    achievements: [{
        achievementId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Achievement',
            required: true
        },
        unlocked: {
            type: Boolean,
            default: false
        },
        progress: {
            type: Number,
            default: 0
        }
    }]
});

export default mongoose.model('UserAchievement', UserAchievementSchema);