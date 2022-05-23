const router = require('express').Router();
const itemController = require("../controllers/item.controller");
//For Student
router.post("/AddUser", itemController.AddUser);
router.post("/Payment", itemController.Payment);
router.get("/userpay", itemController.userpay);
router.get("/selectuserpay/:id", itemController.selectuserpay);
router.get("/selectAll", itemController.selectAll);
router.get("/selectAJE1", itemController.selectAJE1);
router.get("/selectAJE2", itemController.selectAJE2);
router.get("/selectEPPE", itemController.selectEPPE);
router.get("/selectEPPE2", itemController.selectEPPE2);
router.get("/selectTSIG1", itemController.selectTSIG1);
router.get("/selectTSIG2", itemController.selectTSIG2);

router.get("/selectid/:id", itemController.selectid);
//For teachers
router.post("/AddTeacher", itemController.AddTeacher);
router.get("/selectAllTeacher", itemController.selectAllTeacher);
router.get("/selectidTeacher/:id", itemController.selectidTeacher);
router.post("/PaymentTeacher", itemController.PaymentTeacher);
router.get("/selectteacherpay/:id", itemController.selectteacherpay);





module.exports = router;
