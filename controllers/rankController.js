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