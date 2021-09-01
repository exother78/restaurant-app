const router = require("express").Router();
const {
  deletePostalCode,
  updatePostalCode,
  createPostalCode,
  getPostalCode,
  getOnePostalCode,
} = require("../controllers/PostalCode");

router
  .route("/dashboard/postalcodes")
  .get(getPostalCode)
  .post(createPostalCode);

router
  .route("/dashboard/postalcodes/:id")
  .delete(deletePostalCode)
  .patch(updatePostalCode);

router.route("/dashboard/onepostalcode/:postalCode").get(getOnePostalCode);

module.exports = router;
