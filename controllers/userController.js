import { StatusCodes } from 'http-status-codes';
import User from "../models/userModel.js";

export const getCurrentUser = async (req, res) => {
    try {
        let { id } = req.params;
        let user = await User.findById( id );
        res.status(StatusCodes.OK).json({ user });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Internal server error" });
    }
};

export const updateUser = async (req, res) => {
    res.status(StatusCodes.OK).json({ msg: 'update user' });
};