const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.post("/AddUser", itemController.AddUser);
router.post("/Payment", itemController.Payment);
router.get("/userpay", itemController.userpay);
router.get("/selectuserpay/:id", itemController.selectuserpay);
router.get("/selectAll", itemController.selectAll);
router.get("/selectAJE1", itemController.selectAJE1);
router.get("/selectAJE2", itemController.selectAJE1);
router.get("/selectEPPE", itemController.selectEPPE);
router.get("/selectid/:id", itemController.selectid);


module.exports = router;
