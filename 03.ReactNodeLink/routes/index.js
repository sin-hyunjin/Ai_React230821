const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("main router");
});

module.exports = router;
