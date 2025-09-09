const express = require("express");
const router = express.Router();

// controllers
const RecipientData_Controller = require("../controllers/RecipientData_Controller");

// Get all recipient datas
router.get("", RecipientData_Controller.index);

// Get single recipient data
router.get("/:id", RecipientData_Controller.show);

module.exports = router;
