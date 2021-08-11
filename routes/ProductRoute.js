const router = require("express").Router();
const {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} = require("../controllers/Products");

router.route("/products").get(getProducts).post(createProduct);

router.route("/product/:id").delete(deleteProduct).put(updateProduct);

module.exports = router;
