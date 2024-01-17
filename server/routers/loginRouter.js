const express = require("express");
const loginController = require("../controllers/loginController.js");
const router = express.Router();

router.post("/", loginController.login, (req, res) => {
  console.log("user return", res.locals.user);
  res.status(200).json(res.locals.user);
});
router.post("/editUser", loginController.editUser, (req, res) => {
  console.log("user return", res.locals.user);
  res.status(200).json(res.locals.user);
});

// router.post("/change", peopleController.getOneInstructor, (req, res) =>
//   res.status(200).json(res.locals.oneInstructor)
// );

module.exports = router;
