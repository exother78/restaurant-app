const Product = require("../models/ProductModel");

const products = {
  createProduct: async (req, res) => {
    try {
      const { title, description, product_id, category, price, images } =
        req.body;

      if (
        !title ||
        !description ||
        !product_id ||
        !category ||
        !price ||
        !images
      )
        return res.status(400).json({
          success: false,
          error: "Please Provide complete information",
        });

      console.log("body: ", req.body);

      const product = await Product.create({
        title,
        description,
        category,
        product_id,
        price,
        images,
      });

      if (!product) return next(new ErrorResponse("Something wrong ", 500));

      res
        .status(200)
        .json({ success: true, msg: "Successfully created Product", product });
    } catch (err) {
      console.log(err);
      res.status(400).json({ msg: err.message });
    }
  },

  getProducts: async (req, res) => {
    try {
      const products = await Product.find();

      if (!products)
        return res.status(500).json({ error: "No Products found" });

      res.status(200).json({ success: true, products });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  deleteProduct: async (req, res) => {
    const id = req.params.id;
    try {
      await Product.findByIdAndDelete(id);

      res.status(200).json({ success: true, msg: "deleted" });
    } catch (err) {
      res.status(400).json({ msg: "no products found" });
    }
  },

  updateProduct: async (req, res) => {
    const { title, description, product_id, category, price } = req.body;
    const id = req.params.id;

    try {
      const product = await Product.findByIdAndUpdate(id, {
        title,
        description,
        product_id,
        category,
        price,
      });

      const updatedProduct = await Product.findById(id);

      res
        .status(200)
        .json({ msg: "successfully updated a product", updatedProduct });
    } catch (err) {
      res.status(500).json({ msg: "not successful" });
    }
  },
};

module.exports = products;
