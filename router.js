const express = require("express");
const router = express.Router();

const usersController = require("./api/users/users.controller");
const quizController = require("./api/quiz/quiz.controller");

router.use("/users", usersController);
router.use("/quiz", quizController);

module.exports = router;