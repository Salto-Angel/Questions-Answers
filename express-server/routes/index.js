
const router = require('express').Router();
const ansRoutes = require("./ans-routes.js");
const quesRoutes = require("./ques-routes.js");
const questionListRoutes = require("./questions-list-routes.js");
const answerListRoutes = require("./answer-list-routes.js");

//Connect controller methods to their corresponding routes
router.use("/answer", ansRoutes);
router.use("/question", quesRoutes);
router.use("/:question_id/answers", answerListRoutes);
router.use("/:product_id", questionListRoutes);

module.exports = router;