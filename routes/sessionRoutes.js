import express from "express";
import sessionController from "../controllers/sessionController.js";

const router = express.Router();

// GET
router.get("/", sessionController.getSessions);
router.get("/:sessionId", sessionController.getSession);

// POST
router.post("/", sessionController.createSession);

// PUT

router.put("/", sessionController.updateSession);
// DELETE

export default router;
