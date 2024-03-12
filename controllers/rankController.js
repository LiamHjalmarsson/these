import { StatusCodes } from 'http-status-codes';
import Rank from "../models/rankModel.js";

export const createRank = async (req, res) => {
    try {
        let rank = await Rank.create(req.body);

        res.status(StatusCodes.CREATED).json({ rank });
    } catch (error) {
        return res.status(400).json({ error });
    }
};

export const getRanks = async (req, res) => {
    let ranks = await Rank.find({});
    res.status(StatusCodes.OK).json({ ranks });
};

export const getRank = async (req, res) => {
    try {
        let { id } = req.params;
        let rank = await Rank.findById(id);
        res.status(StatusCodes.OK).json({ rank });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
    }
}
