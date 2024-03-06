import { StatusCodes } from 'http-status-codes';
import User from "../models/userModel.js";
import { hashPassword, comparePassword } from '../utils/password.js';
import { createJWT } from '../utils/token.js';

export const register = async (req, res) => {

    try {
        let hashedPassword = await hashPassword(req.body.password);
        req.body.password = hashedPassword;

        let user = await User.create(req.body);
        res.status(StatusCodes.CREATED).json({ user });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
    }
};

export const login = async (req, res) => {

    try {
        let user = await User.findOne({ email: req.body.email });

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

        let token = createJWT({ userId: user._id });

        res.json({ token });
    } catch (error) {

        return res.status(StatusCodes.NON_AUTHORITATIVE_INFORMATION).json({ error });

    }

};

export const logout = (req, res) => {
    res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
};