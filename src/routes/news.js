import express from "express";
import newController from "../app/controllers/NewsController.js";

const router = express.Router();

router.get("/:slug", newController.show)
router.get("/", newController.index);


export default router;
