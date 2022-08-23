const express = require("express");
const router = express.Router();
const Opera = require("../models/opera");

// @route   GET api/operas
router.get("/operas", async (req, res) => {
  try {
    const operas = await Opera.find({});
    res.status(200).send(operas);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
