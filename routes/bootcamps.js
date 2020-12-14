const express = require("express");
const router = express.Router();
const advancedResults = require("../middleware/advancedResults");
const Bootcamp = require("../models/Bootcamp");
const {
	getBootcamps,
	getBootcamp,
	createBootcamp,
	updateBootcamp,
	deleteBootcamp,
	getBootcampsInRadius,
	bootcampPhotoUpload,
} = require("../controllers/bootcamps");

const { protect } = require("../middleware/auth");

// Include other resource routers
const courseRouter = require("./courses");

// Re-route into toher resource routers
router.use("/:bootcampId/courses", courseRouter);

router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);

router
	.route("/")
	.get(advancedResults(Bootcamp, "courses"), getBootcamps)
	.post(protect, createBootcamp);

router.route("/:id/photo").put(protect, bootcampPhotoUpload);

router
	.route("/:id")
	.get(getBootcamp)
	.put(protect, updateBootcamp)
	.delete(protect, deleteBootcamp);

module.exports = router;
