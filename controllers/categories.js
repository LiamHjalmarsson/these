import { StatusCodes } from "http-status-codes";
import Category from "../models/categoryModel.js";

export const getAllCategories = async (req, res) => {
    let categories = await Category.find({});
    res.status(StatusCodes.OK).json({ categories });
};

export const createCategory = async (req, res) => {

    try {
        let newCategory = await Category.create(req.body );
        res.status(StatusCodes.CREATED).json({ data: newCategory });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
    }

};

export const getCategory = async (req, res) => {
    try {
        let { id } = req.params;
        let category = await Category.findById(id);
        res.status(StatusCodes.OK).json({ category });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
    }
};

export const updateCategory = async (req, res) => {
    let { id } = req.params;

    try {
        let updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
            new: true,
        });

        res.status(StatusCodes.OK).json({ category: updatedCategory });
    } catch (error) {

        return res.status(404).json({ msg: `no category with id ${id}` });
    }
};

export const deleteCategory = async (req, res) => {
    let { id } = req.params;

    try {
        await Category.findByIdAndDelete(id);

        res.status(StatusCodes.OK).json({ msg: 'Category deleted' });
    } catch (error) {

        return res.status(404).json({ msg: `No category with id ${id}` });
    }

};