const Product = require("../models/ProductModel");

const products = {
  createProduct: async (req, res, next) => {
    try {
      const { title, description, product_id, category, price, images } =
        req.body;
      console.log("something:", req.body);

      if (!title || !description || !product_id || !price)
        return res.status(400).json({
          success: false,
          error: "Please Provide complete information",
        });

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
      // console.log(err);
      // console.log("error here: ", err);
      // res.status(400).json({ msg: err.message });
      next(err);
    }
  },

  getProducts: async (req, res, next) => {
    try {
      const products = await Product.find();

      if (!products)
        return res.status(500).json({ error: "No Products found" });

      res.status(200).json({ success: true, products });
    } catch (err) {
      // res.status(500).json({ error: err.message });
      next(err);
    }
  },

  deleteProduct: async (req, res, next) => {
    const id = req.params.id;
    try {
      await Product.findByIdAndDelete(id);

      res.status(200).json({ success: true, message: "deleted" });
    } catch (err) {
      // res.status(400).json({ error: "no products found" });
      next(err);
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
