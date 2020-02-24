const router = require('express').Router();
const controls = require("../controls");

router.put("/:answer_id/helpful", controls.answers.helpful);
router.put("/:answer_id/report", controls.answers.report);

module.exports = router;