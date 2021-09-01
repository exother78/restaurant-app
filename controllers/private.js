exports.getPrivateData = (req, res, next) => {
  const image = Object.values(req.user.images);

  res.status(200).json({
    success: true,
    data: "You got the access to the private page",
    user: req.user,
  });
};
