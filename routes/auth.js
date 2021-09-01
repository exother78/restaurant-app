const express = require("express");
const { adminAuth } = require("../middleware/AdminAuth");
const { protect } = require("../middleware/protect");
const {
  register,
  login,
  forgotPassword,
  resetPassword,
  refreshToken,
  logout,
  updateOrders,
  getOrders,
  allOrders,
} = require("../controllers/auth");
const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/logout").get(logout);

router.route("/allorders").get(protect, adminAuth, allOrders);

router.route("/updateorders/:id").patch(updateOrders);

router.route("/getorders/:id").get(getOrders);

router.route("/forgotpassword").post(forgotPassword);

router.route("/resetpassword/:resetToken").put(resetPassword);

router.route("/rtfat").get(refreshToken);

module.exports = router;
