import { StatusCodes } from 'http-status-codes';
import User from "../models/userModel.js";
import Achivments from "../models/achivmentsModel.js";
import UserAchivments from "../models/userAchivmentsModel.js";
import { hashPassword, comparePassword } from '../utils/password.js';
import { createJWT } from '../utils/token.js';


async function initializeDefaultAchievement(userId) {
    try {
        let memberAchievement = await Achivments.findOne({ name: 'member' });

        if (!memberAchievement) {
            await Achivments.create({
                name: 'member',
                description: 'Member Achievement',
                points: 100,
            });
        }

        let achievementId = memberAchievement ? memberAchievement._id : null;

        await UserAchivments.create({
            userId: userId,
            achievements: [{
                achievementId: achievementId,
                unlocked: true, 
                progress: 100,
            }],
        });
    } catch (error) {
        console.error('Error initializing default achievement:', error);
    }
}

export const register = async (req, res) => {
    try {
        let hashedPassword = await hashPassword(req.body.password);
        req.body.password = hashedPassword;

        let user = await User.create(req.body);

        await initializeDefaultAchievement(user._id);

        res.status(StatusCodes.CREATED).json({ user });
    } catch (error) {
        return res.status(400).json({ error });
    }
};

export const login = async (req, res) => {

    try {
        let user = await User.findOne({ name: req.body.name });

        if (!user) {
            return res.status(400).json({ msg: "error user" })
        }

        let isPasswordMatch = await comparePassword(
            req.body.password,
            user.password
        );

        if (!isPasswordMatch) {
            return res.status(400).json({ msg: "error password" })
        }

        // let token = createJWT({ userId: user._id });

        res.json({ user });
    } catch (error) {

        return res.status(StatusCodes.NON_AUTHORITATIVE_INFORMATION).json({ error });

    }

};

export const logout = (req, res) => {
    res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
};