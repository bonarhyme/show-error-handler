const express = require("express");
const { getNames } = require("../controllers/testController");
const router = express.Router();

router.get("/get-names", getNames);

module.exports = router;
