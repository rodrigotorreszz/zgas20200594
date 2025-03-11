import express from "express";
import emplooyesController from "../controllers/employeesControllers.js";

const router = express.Router();

router.route("/")
.get(emplooyesController.getEmplooyes)
.post(emplooyesController.insertEmplooyes)

router.route("/:id")
.put(emplooyesController.updateEmplooyes)
.delete(emplooyesController.deleteEmplooyes)

export default router;