exports.getPrivateData = (req, res, next) => {
  const image = Object.values(req.user.images);
  // if (image.length === 0) console.log("no images");
  res.status(200).json({
    success: true,
    data: "You got the access to the private page",
    user: req.user,
  });
};
