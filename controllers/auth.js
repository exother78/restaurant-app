const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    password,
    address,
    addressLine2,
    city,
    images,
  } = req.body;

  console.log(
    `f ${firstName} l ${lastName} e ${email} p ${password} a ${address} a ${addressLine2} c ${city} im ${images}`
  );
  try {
    // console.log("address", address);
    // if(password)
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      address,
      addressLine2,
      city,
      images,
    });
    sendToken(user, 201, res);
  } catch (error) {
    // if (error.code === 11000) {
    //   res.json({
    //     error:
    //       "Duplicate Emails detected, Please try with a different email address",
    //   });
    // }
    // res.json({ error });

    // console.log("error: ", error);
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new ErrorResponse("Please provide an email and password", 400));

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      //   console.log(user);
      return next(new ErrorResponse("Invalid Credentials", 404));
    }

    const isMatch = await user.matchPasswords(password);

    if (!isMatch) return next(new ErrorResponse("Wrong Password", 401));

    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  if (!email) return next(new ErrorResponse("Please provide an email"));

  try {
    const user = await User.findOne({ email });
    // console.log(user);

    if (!user) return next(new ErrorResponse("no email found", 404));

    const resetToken = await user.getResetPasswordToken();

    await user.save();

    const resetUrl = `localhost:5000/resetpassword/${resetToken}`;

    res.status(201).json({ success: true, data: user, resetUrl });
  } catch (err) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    // res.status(500).json({ success: false, error: err });

    return next(new ErrorResponse("Password Reset Unsuccessful", 500));
  }
};

exports.resetPassword = async (req, res, next) => {
  const { password } = req.body;
  const { resetToken } = req.params;

  if (!password) return next(new ErrorResponse("Please Provide a password"));

  try {
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user)
      return next(new ErrorResponse("No user found with the given token", 404));

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(200).json({
      success: true,
      user,
      resetToken,
      message: "successfully password changed",
    });
  } catch (err) {
    next(new ErrorResponse("Reset was Unsuccessful", 400));
  }
};

exports.refreshToken = async (req, res, next) => {
  const rtfat = req.cookies.rtfat;

  try {
    // if (!rtfat) next(new ErrorResponse("Please login or register"));
    if (!rtfat)
      res.status(400).json({ success: true, error: "Not Found Token" });

    const decode = jwt.verify(rtfat, process.env.refresh_token_secret);

    const user = await User.findById(decode.id);

    if (!user) next(new ErrorResponse("No user found with this id", 404));

    const accessToken = await user.getAccessToken();
    res.json({ accessToken });
  } catch (err) {
    next(err);
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("rtfat", { path: "/api/user/rtfat" });
    return res.json({ msg: "Logged out" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const sendToken = async (user, statusCode, res) => {
  const accessToken = await user.getAccessToken();
  const refreshToken = await user.getRefreshToken();

  res.cookie("rtfat", refreshToken, {
    httpOnly: true,
    path: "/api/user/rtfat",
    maxAge: 7 * 24 * 60 * 60 * 1000, //7d
  });

  // const token = await user.getSignedToken();
  // res.status(statusCode).json({ success: true, user, token, accessToken });
  res.status(statusCode).json({ success: true, user, accessToken });
};
