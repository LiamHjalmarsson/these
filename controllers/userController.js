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
    let { id } = req.params;

    try {
        let updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedUser) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: 'User not found' });
        }

        res.status(StatusCodes.OK).json({ user: updatedUser });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
};