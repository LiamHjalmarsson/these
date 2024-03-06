import { StatusCodes } from "http-status-codes";
import Clothing from "../models/clothingModel.js";

export const getAllClothings = async (req, res) => {
    let clothings = await Clothing.find({});
    res.status(StatusCodes.OK).json({ clothings });
};

export const createClothing = async (req, res) => {
    try {
        let newClothing = await Clothing.create(req.body );
        res.status(StatusCodes.CREATED).json({ data: newClothing });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
    }
};

export const getClothing = async (req, res) => {
    try {
        let { id } = req.params;
        let clothing = await Clothing.findById(id);
        res.status(StatusCodes.OK).json({ clothing });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
    }
};

export const updateClothing = async (req, res) => {
    let { id } = req.params;

    try {
        let updatedClothing = await Clothing.findByIdAndUpdate(id, req.body, {
            new: true,
        });

        res.status(StatusCodes.OK).json({ clothing: updatedClothing });
    } catch (error) {

        return res.status(404).json({ msg: `no clothing with id ${id}` });
    }
};

export const deleteClothing = async (req, res) => {
    let { id } = req.params;

    try {
        await Clothing.findByIdAndDelete(id);

        res.status(StatusCodes.OK).json({ msg: 'clothing deleted' });
    } catch (error) {

        return res.status(404).json({ msg: `No clothing with id ${id}` });
    }

};