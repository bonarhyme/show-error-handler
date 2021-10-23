const asyncHandler = require("express-async-handler");

const getNames = asyncHandler(async (req, res) => {
  if (!req.query.name) {
    res.status(400);
    throw new Error("Provide a name.");
  }

  console.log("Name found in the database.");
  res.send("Name found.");
});

module.exports = { getNames };
