import { StatusCodes } from 'http-status-codes';
import User from "../models/userModel.js";

export const getCurrentUser = async (req, res) => {
    let user = await User.findOne({ _id: req.user.userId });
    res.status(StatusCodes.OK).json({ user });
};

export const updateUser = async (req, res) => {
    res.status(StatusCodes.OK).json({ msg: 'update user' });
};