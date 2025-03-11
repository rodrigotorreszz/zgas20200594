import express from "express";
import officeControllers from "../controllers/officeControllers.js";

const router = express.Router();

router.route("/")
.get(officeControllers.getOffices)
.post(officeControllers.insertOffices)

router.route("/:id")
.put(officeControllers.updateOffices)
.delete(officeControllers.deleteOffices)

export default router;