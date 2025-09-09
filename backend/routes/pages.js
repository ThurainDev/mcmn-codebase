const express = require("express");
const router = express.Router();

// controllers
const PagesController = require("../controllers/PagesController");

// Get home page data
router.get("/home", PagesController.getHomeData);

// Get about page data
router.get("/about", PagesController.getAboutData);

// Get what-we-provide page data
router.get("/what-we-provide", PagesController.getWhatWeProvideData);

// Get music-distribution page data
router.get("/music-distribution", PagesController.getMusicDistributionData);

// Get tunes-academy page data
router.get("/tunes-academy", PagesController.getTunesAcademyData);

// Get contact page data
router.get("/contact", PagesController.getContactData);

module.exports = router;



