const Category = require('../model/category');


const getAllCategory = async (req, res) => {
    try {
        const category = await Category.find();
        if (category.length==0) {
            return res.status(204).send();
        }
        res.json(category);
    } catch (error) {
         res.status(400).send(error.message);
    }
};

const storeCategory = async (req, res) => {
    const category = new Category(req.body);
    try {
        await category.save();
        res.status(201).json(req.body);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            res.status(404).send('Category not found!')
        }
        res.json(category);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
    if (!category) {
        return res.status(404).json({ error: "Data not found" });
    }
    category.categoryName = req.body.categoryName;

    await category.save();
    return res.status(200).json(category);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const destroyCategory = async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        return res.status(404).json({ error: "Data not found" });
    }
    await category.remove();
    res.status(204).json({});
};

module.exports = {
    getAllCategory,
    storeCategory,
    getCategoryById,
    updateCategory,
    destroyCategory
};
