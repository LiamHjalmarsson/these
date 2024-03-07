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
    let userId = req.body.userId; 
    let { name, email } = req.body; 

    try {
        let updatedUser = await User.findByIdAndUpdate(userId, { name, email }, { new: true });

        if (!updatedUser) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: 'User not found' });
        }

        res.status(StatusCodes.OK).json({ user: updatedUser });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
};