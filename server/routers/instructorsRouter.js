const express = require("express");
const peopleController = require("../controllers/peopleController.js");
const router = express.Router();

router.get("/", peopleController.getInstructors, (req, res) =>
  res.status(200).json(res.locals.instructors)
);

router.get("/:name", peopleController.getOneInstructor, (req, res) =>
  res.status(200).json(res.locals.oneInstructor)
);

module.exports = router;
