const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const { getDonarsListController, getOrgListController, getHospitalListController, deleteDonarController } = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");
const router = express.Router();


//GET || DONAR LIST
router.get("/donar-list", authMiddelware, adminMiddleware, getDonarsListController);

//GET || HOSPITAL LIST
router.get("/hospital-list", authMiddelware, adminMiddleware, getHospitalListController);

//GET || ORG LIST
router.get("/org-list", authMiddelware, adminMiddleware, getOrgListController);

// DELETE DONAR
router.delete("/delete-donar/:id", authMiddelware, adminMiddleware, deleteDonarController);

module.exports = router;