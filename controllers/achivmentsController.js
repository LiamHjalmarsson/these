import { StatusCodes } from "http-status-codes";
import Achivments from "../models/achivmentsModel.js";


export const getAllAchivments = async (req, res) => {
    let achivments = await Achivments.find({});
    res.status(StatusCodes.OK).json({ achivments });
};

export const createAchivments = async (req, res) => {
    try {
        let newAchivment = await Achivments.create(req.body );
        res.status(StatusCodes.CREATED).json({ data: newAchivment });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
    }
};

export const getAchivment = async (req, res) => {
    try {
        let { id } = req.params;
        let achivments = await Achivments.findById(id);
        res.status(StatusCodes.OK).json({ achivments });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
    }
}