const router = require("express").Router();
const {
  deletePostalCode,
  updatePostalCode,
  createPostalCode,
  getPostalCode,
} = require("../controllers/PostalCode");

router
  .route("/dashboard/postalcodes")
  .get(getPostalCode)
  .post(createPostalCode);

router
  .route("/dashboard/postalcodes/:id")
  .delete(deletePostalCode)
  .patch(updatePostalCode);

module.exports = router;
