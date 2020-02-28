const router = require('express').Router();
const controls = require("../controls");

router.get("/:question_id/answers", controls.question_id.get);
router.post("/:question_id/answers", controls.question_id.post);

router.get("/:product_id", controls.product_id.get);
router.post("/:product_id", controls.product_id.post);

module.exports = router;

