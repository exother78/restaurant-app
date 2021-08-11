const express = require("express");
const {
  register,
  login,
  forgotPassword,
  resetPassword,
  refreshToken,
  logout,
} = require("../controllers/auth");
const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/logout").get(logout);

router.route("/forgotpassword").post(forgotPassword);

router.route("/resetpassword/:resetToken").put(resetPassword);

router.route("/rtfat").get(refreshToken);

module.exports = router;
