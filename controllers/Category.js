const Category = require("../models/CategoryModel");

const category = {
  getCategories: async (req, res, next) => {
    try {
      const categories = await Category.find();

      if (!categories)
        return res.status(400).json({ msg: "No category found" });

      res.status(200).json({ categories });
    } catch (err) {
      // res.status(400).json({ msg: err.message });
      next(err);
    }
  },

  createCategory: async (req, res, next) => {
    const { name, images } = req.body;
    try {
      const category = await Category.create({ name, images });

      res
        .status(200)
        .json({ success: true, message: "Category Created", category });
    } catch (err) {
      next(err);
      // console.log(err);
      // res.status(400).json({ msg: err.message });
    }
  },

  updateCategory: async (req, res, next) => {
    const { name, images } = req.body;
    const id = req.params.id;

    try {
      // if (images) {
      const category = await Category.findByIdAndUpdate(id, { name, images });
      if (!category)
        return res
          .status(400)
          .json({ error: "No Category found with this id" });
      res.status(200).json({ success: true, msg: "Updated successfully" });
      // console.log("image: ", images, " name: ", name);
      // }

      // if (!images) {
      //   const category = await Category.findByIdAndUpdate(id, { name });
      //   if (!category)
      //     return res
      //       .status(400)
      //       .json({ error: "No Category found with this id" });

      //   res.status(200).json({ success: true, msg: "Updated successfully" });
      // }
    } catch (err) {
      // res.status(400).json({ msg: err.message });
      next(err);
    }
  },

  deleteCategory: async (req, res, next) => {
    const id = req.params.id;

    try {
      await Category.findByIdAndDelete(id);

      res
        .status(200)
        .json({ success: true, message: "Successfully deleted a category" });
    } catch (err) {
      // res.status(400).json({ error: err.message });
      next(err);
    }
  },
};

module.exports = category;
