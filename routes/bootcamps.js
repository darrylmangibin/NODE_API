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

// Include other resource routers
const courseRouter = require("./courses");

// Re-route into toher resource routers
router.use("/:bootcampId/courses", courseRouter);

router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);

router
	.route("/")
	.get(advancedResults(Bootcamp, "courses"), getBootcamps)
	.post(createBootcamp);

router.route("/:id/photo").put(bootcampPhotoUpload);

router
	.route("/:id")
	.get(getBootcamp)
	.put(updateBootcamp)
	.delete(deleteBootcamp);

module.exports = router;
