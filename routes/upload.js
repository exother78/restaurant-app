const router = require("express").Router();
const fs = require("fs");
const { uploadImage } = require("../controllers/upload");

router.route("/upload").post(uploadImage);

module.exports = router;
