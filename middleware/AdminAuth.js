const ErrorResponse = require("../utils/errorResponse");

exports.adminAuth = async (req, res, next) => {
  console.log("came");
  if (req.user.role === 0)
    next(new ErrorResponse("Not Authorized to access this route", 400));
  console.log("passed");
  if (req.user.role === 1) next();
};
