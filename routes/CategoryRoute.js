const router = require("express").Router();

const {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/Category");

router.route("/category").get(getCategories).post(createCategory);

router.route("/category/:id").delete(deleteCategory).patch(updateCategory);

module.exports = router;
