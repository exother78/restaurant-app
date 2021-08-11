const Category = require("../models/CategoryModel");

const category = {
  getCategories: async (req, res) => {
    try {
      const categories = await Category.find();

      if (!categories)
        return res.status(400).json({ msg: "No category found" });

      res.status(200).json({ categories });
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },

  createCategory: async (req, res) => {
    const { name, images } = req.body;
    try {
      const category = await Category.create({ name, images });

      res.status(200).json({ success: true, category });
    } catch (err) {
      console.log(err);
      res.status(400).json({ msg: err.message });
    }
  },

  updateCategory: async (req, res) => {
    const { name } = req.body;
    const id = req.params.id;

    try {
      const category = await Category.findByIdAndUpdate(id, { name });

      if (!category)
        return res.status(400).json({ msg: "No Category found with this id" });

      res.status(200).json({ success: true, msg: "Updated successfully" });
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },

  deleteCategory: async (req, res) => {
    const id = req.params.id;

    try {
      await Category.findByIdAndDelete(id);

      res
        .status(200)
        .json({ success: true, msg: "Successfully deleted a category" });
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
};

module.exports = category;
