const router = require('express').Router();
const controls = require("../controls");

router.put("/:question_id/helpful", controls.questions.helpful);
router.put("/:question_id/report", controls.questions.report);

module.exports = router;