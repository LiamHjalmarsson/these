import Category from "../models/categoryModel.js";

export const getAllCategories = async (req, res) => {
    try {
        let categories = await Category.find({});
        res.status(200).json({ categories });
    } catch (error) {
        res.status(500).json({ msg: "Error getin products" });
    }
};

export const createCategory = async (req, res) => {
    const { category, description } = req.body;

    try {
        if (!category) {
            return res.status(400).json({ msg: "Category name is required" });
        }

        const existingCategory = await Category.findOne({ category });

        if (existingCategory) {
            return res.status(400).json({ msg: "Category with this name already exists" });
        }

        const newCategory = await Category.create({ category, description });
        res.status(201).json({ data: newCategory });
    } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).json({ msg: "Error creating category" });
    }
};

export const getCategory = async (req, res) => {
    let { id } = req.params;

    try {
        let category = await Category.findById(id);

        if (!category) {
            return res.status(404).json({ msg: `no category with id ${id}` });
        }

        res.status(200).json({ category });
    } catch (error) {
    }

};

export const updateCategory = async (req, res) => {
    let { id } = req.params;

    let updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
        new: true,
    });

    if (!updatedCategory) {
        return res.status(404).json({ msg: `no category with id ${id}` });
    }

    res.status(200).json({ category: updatedCategory });
};

export const deleteCategory = async (req, res) => {
    let { id } = req.params;

    try {
        let removedCategory = await Category.findByIdAndDelete(id);

        if (!removedCategory) {
            return res.status(404).json({ msg: `No category with id ${id}` });
        }

        res.status(200).json({ msg: 'Category deleted' });
    } catch (error) {

    }

};