
const router = require('express').Router();
const ansRoutes = require("./ans-routes.js");
const quesRoutes = require("./ques-routes.js");
const listRoutes = require("./listRoutes.js");

//Connect controller methods to their corresponding routes
router.use("/answer", ansRoutes);
router.use("/question", quesRoutes);
router.use("/", listRoutes);

module.exports = router;