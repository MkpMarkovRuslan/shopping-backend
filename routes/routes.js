const express = require("express");
const router = express.Router();

const entityControllers = require("../controllers/entity.controller");

router.get("/getAll", entityControllers.getAllEntitys);
router.post("/create", entityControllers.createEntity);
router.patch("/update", entityControllers.updateEntity);
router.delete("/delete", entityControllers.deleteEntity);

module.exports = router;
