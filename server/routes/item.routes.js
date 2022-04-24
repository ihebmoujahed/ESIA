const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.post("/AddUser", itemController.AddUser);
router.get("/selectAll", itemController.selectAll);
router.get("/selectAJE1", itemController.selectAJE1);
router.get("/selectAJE2", itemController.selectAJE1);
router.get("/selectEPPE", itemController.selectEPPE);

module.exports = router;
